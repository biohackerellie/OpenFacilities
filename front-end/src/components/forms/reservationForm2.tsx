'use client';

import { ModalInput } from '@/components/forms/recurringModal';
import useHandleAddDate from '@/components/hooks/useHandleAddDate';
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
  AlertDialogAction,
} from '@/components/ui/alert-dialog';
import { Button } from '@/components/ui/buttons/button';
import { Checkbox } from '@/components/ui/checkbox';
import { useSearchParams } from 'next/navigation';
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from '@/components/ui/command';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/components/ui/use-toast';
import { categoryOptions, locations } from '@/lib/formOptions';
import { cn } from '@/lib/utils';
import { zodResolver } from '@hookform/resolvers/zod';
import { Check, ChevronsUpDown, ScrollText, Loader2 } from 'lucide-react';
import { useSession } from 'next-auth/react';
import React from 'react';
import { useFieldArray, useForm } from 'react-hook-form';
import type * as z from 'zod';
import { ToastAction } from '../ui/toast';
import { formSchema } from './schemas/reservationForm';
import submitReservation from '@/functions/reservations/createReservation';
import { useRouter } from 'next/navigation';

type formValues = z.infer<typeof formSchema>;

export default function ReservationForm() {
  const [isVisible, setIsVisible] = React.useState(false);
  const [selectedData, setSelectedData] = React.useState(null);
  const [open, setOpen] = React.useState(false);
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const hideModal = () => setIsVisible(false);
  const { data: session } = useSession();
  const email = session?.user?.email;
  let selectedFacility = 0;
  const router = useRouter();
  const { toast } = useToast();
  const searchParams = useSearchParams();
  if (searchParams.has('id')) {
    selectedFacility = Number(searchParams.get('id'));
  }
  const form = useForm<formValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: email,
      facility: selectedFacility,
      techSupport: false,
      doorAccess: false,
      category: '',
      techDetails: '',
      doorsDetails: '',
    },
  });
  const control = form.control;

  const { fields, append, remove } = useFieldArray({
    control,
    name: 'events',
    rules: { required: true },
  });

  //@ts-expect-error
  const handleAddDate = useHandleAddDate(append);
  const watchTechSupport = form.watch('techSupport', false);
  const watchDoorAccess = form.watch('doorAccess', false);

  const onSubmit = async (data: formValues) => {
    setIsSubmitting(true);
    try {
      const res = await submitReservation(data);

      if (res === 'Success') {
        setOpen(true);
      }
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Something went wrong',
        action: <ToastAction altText="retry">close</ToastAction>,
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <div className="   w-screen  sm:w-[850px]  justify-center drop-shadow-md  flex flex-col ">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-8 p-2 sm:p-0 mt-10 mb-10 sm:w-[800px]"
        >
          <div>
            <FormField
              control={form.control}
              name={'eventName'}
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-lg">Event Name</FormLabel>
                  <FormControl>
                    <Input
                      type="text"
                      className=""
                      placeholder="Event Name"
                      {...field}
                    />
                  </FormControl>
                  <FormDescription>
                    Enter the name of your event.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="flex flex-col sm:flex-row gap-y-2 justify-between">
            <FormField
              control={form.control}
              name={'name'}
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-lg">
                    Primary Contact Name
                  </FormLabel>
                  <FormControl>
                    <Input
                      type="text"
                      className=""
                      placeholder="FirstName LastName"
                      {...field}
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name={'phone'}
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-lg">Phone Number</FormLabel>
                  <FormControl>
                    <Input
                      type="text"
                      className=""
                      placeholder="555-555-5555"
                      {...field}
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name={'email'}
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-lg">Email</FormLabel>
                  <FormControl>
                    <Input type="text" className="" {...field} />
                  </FormControl>
                  <FormDescription>
                    Must be the email address associated with your account
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <FormField
            control={form.control}
            name={'details'}
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-lg">Event Description</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Please provide any additional details about your event including any special requests or needs, additional contact information, etc."
                    {...field}
                  />
                </FormControl>
                <FormDescription>
                  Must be the email address associated with your account
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className=" justify-center flex-col flex  p-2">
            <h2 className="font-bold text-center text-xl">Event Dates</h2>
            <div className="justify-center flex">
              <Button
                className="hover:cursor-pointer h-8"
                size={'sm'}
                variant="outline"
                type="button"
                onClick={() =>
                  append({
                    startDate: '',
                    startTime: '',
                    endTime: '',
                  })
                }
              >
                Add Date
              </Button>
              <ModalInput onSave={handleAddDate} />
              <Button
                className="hover:cursor-pointer h-8"
                variant="outline"
                size={'sm'}
                type="button"
                onClick={() => remove()}
              >
                Clear All
              </Button>
            </div>
            <div className="max-h-[400px] overflow-y-scroll gap-x-2 justify-center align-middle items-center self-center max-w-[800px] border-2 rounded-md">
              {fields.map((field, index) => {
                return (
                  <div
                    key={field.id}
                    className="flex flex-row  border-b-2   p-2 gap-2 gap-x-4  grid-rows-6  justify-start sm:justify-between flex-wrap flex-shrink sm:flex-nowrap"
                  >
                    <FormField
                      control={form.control}
                      name={`events.${index}.startDate`}
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-lg">Start Date</FormLabel>
                          <FormControl>
                            <Input
                              className="w-auto h-auto"
                              type="date"
                              placeholder="Start Date"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name={`events.${index}.startTime`}
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-lg">Start Time</FormLabel>
                          <FormControl>
                            <Input
                              className="w-auto h-auto"
                              type="time"
                              placeholder="Start Time"
                              {...field}
                            />
                          </FormControl>

                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name={`events.${index}.endTime`}
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-lg">End Time</FormLabel>
                          <FormControl>
                            <Input
                              className="w-auto h-auto"
                              type="time"
                              placeholder="End Time"
                              {...field}
                            />
                          </FormControl>

                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <Button
                      type="button"
                      size="sm"
                      className="self-end sm:self-center"
                      onClick={() => remove(index)}
                    >
                      Delete Date
                    </Button>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="flex flex-col place-items-center sm:flex-row justify-center sm:justify-between">
            <div className="text-center sm:text-start">
              <FormField
                control={form.control}
                name={'facility'}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-lg text-center sm:text-start">
                      Select A Facility
                    </FormLabel>
                    <div />
                    <Popover>
                      <PopoverTrigger asChild>
                        <FormControl>
                          <Button
                            variant="outline"
                            role="combobox"
                            className={cn(
                              'w-[200px] justify-between',
                              !field.value && 'text-muted-foreground'
                            )}
                          >
                            {field.value
                              ? locations.find(
                                  (location) => location.value === field.value
                                )?.label
                              : 'Select a Facility'}
                            <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                          </Button>
                        </FormControl>
                      </PopoverTrigger>
                      <PopoverContent className="w-[200px] h-[400px] overflow-y-scroll">
                        <Command>
                          <CommandInput
                            className="h-2"
                            placeholder="Search..."
                          />
                          <CommandEmpty>Not Found</CommandEmpty>
                          <CommandGroup className="overflow-y-scroll">
                            {locations.map((location) => (
                              <CommandItem
                                value={location.label}
                                key={location.value}
                                onSelect={() => {
                                  form.setValue('facility', location.value);
                                }}
                              >
                                <Check
                                  className={cn(
                                    'mr-2 h-4 w-4',
                                    location.value === field.value
                                      ? 'opacity-100'
                                      : 'opacity-0'
                                  )}
                                />
                                {location.label}
                              </CommandItem>
                            ))}
                          </CommandGroup>
                        </Command>
                      </PopoverContent>
                    </Popover>
                    <FormDescription>
                      May only select one facility per form
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="w-[200px] text-center sm:text-start mt-2">
              <FormField
                control={form.control}
                name="category"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-lg">Pricing Category</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a Category" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {categoryOptions.map((option) => (
                          <SelectItem key={option.value} value={option.value}>
                            {option.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormDescription>
                      <AlertDialog>
                        <AlertDialogTrigger asChild>
                          <p className="flex">
                            Category Descriptions{' '}
                            <ScrollText
                              className="animate-pulse hover:stroke-blue-500 cursor-pointer"
                              size={16}
                              strokeWidth={1.5}
                            />{' '}
                          </p>
                        </AlertDialogTrigger>
                        <AlertDialogContent>
                          <AlertDialogHeader>
                            <AlertDialogTitle>
                              Pricing Category Descriptions
                            </AlertDialogTitle>
                            <AlertDialogDescription>
                              <h1 className="font-bold text-lg my-1">
                                Category 1
                              </h1>
                              Groups in this category are basically community
                              groups (church or secular) whose memberships
                              involve Laurel school age children whose leaders
                              or advisors are generally non-paid adults and
                              whose main purpose is to in some way educate the
                              youngster member. These groups will not be charged
                              a rental fee for the use of the buildings except
                              the LHS auditorium, any computer labs, or the
                              Stadium.
                              <h1 className="font-bold text-lg my-1">
                                Category 2
                              </h1>
                              This category includes all community non-profit
                              organizations (IRS numbers) and community groups
                              of people who wish to use facilities owned by the
                              school district for lectures, promotional
                              activities, political rallies, entertainment,
                              college courses, athletic groups, exercise groups,
                              dance groups, church services or other activities
                              for which public halls or commercial facilities
                              generally are rented.
                              <h1 className="font-bold text-lg my-1">
                                Category 3
                              </h1>
                              This group shall include all for-profit
                              organizations not listed in #1 or #2 and
                              non-profit organizations from outside the
                              community.
                              <h1 className="font-bold text-lg my-1">
                                LPS Staff
                              </h1>
                              For all LPS Staff members to reserve space for
                              school related activities, sports, and groups
                            </AlertDialogDescription>
                          </AlertDialogHeader>
                          <AlertDialogFooter>
                            <AlertDialogCancel>Close</AlertDialogCancel>
                          </AlertDialogFooter>
                        </AlertDialogContent>
                      </AlertDialog>
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>
          <div className="flex justify-center">
            <div>
              <FormField
                control={form.control}
                name={'techSupport'}
                render={({ field }) => (
                  <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
                    <FormControl>
                      <Checkbox
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>
                    <div className="space-y-1 leading-none">
                      <FormLabel>
                        Does your event require tech support?
                      </FormLabel>
                    </div>
                  </FormItem>
                )}
              />
            </div>
            {watchTechSupport && (
              <FormField
                control={form.control}
                name={'techDetails'}
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Textarea
                        placeholder="Please provide any additional details "
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            )}
          </div>
          <div className="flex justify-center">
            <div>
              <FormField
                control={form.control}
                name={'doorAccess'}
                render={({ field }) => (
                  <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
                    <FormControl>
                      <Checkbox
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>
                    <div className="space-y-1 leading-none">
                      <FormLabel>
                        Does your event require unlocked doors?
                      </FormLabel>
                    </div>
                  </FormItem>
                )}
              />
            </div>
            <div>
              {watchDoorAccess && (
                <FormField
                  control={form.control}
                  name={'doorsDetails'}
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Textarea
                          placeholder="Please provide any additional details"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              )}
            </div>
          </div>
          <div className="justify-end self-end flex">
            {!isSubmitting ? (
              <Button type="submit">Submit</Button>
            ) : (
              <Button disabled>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              </Button>
            )}
          </div>
        </form>
      </Form>
      <AlertDialog open={open} onOpenChange={setOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Success!</AlertDialogTitle>
          </AlertDialogHeader>
          <AlertDialogDescription>
            Your request has been submitted and is now pending approval.
          </AlertDialogDescription>
          <AlertDialogFooter>
            Submit another request?
            <AlertDialogCancel onClick={() => router.push('/')}>
              No
            </AlertDialogCancel>
            <AlertDialogAction onClick={() => location.reload()}>
              Yes
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}
