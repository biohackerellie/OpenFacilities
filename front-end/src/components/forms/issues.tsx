'use client';

import * as React from 'react';
import { Input } from '../ui/input';
import { Checkbox } from '../ui/checkbox';
import { Button, SubmitButton } from '../ui/buttons';
import { Textarea } from '../ui/textarea';
import { Label } from '@/components/ui/label';
import { submitIssue } from './actions';
//@ts-expect-error
import { useFormState } from 'react-dom';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/drawer';
import { cn } from '@/lib/utils';
import { useMediaQuery } from '../hooks';

export function IssuesForm() {
  const [open, setOpen] = React.useState(false);
  const isDesktop = useMediaQuery('(min-width: 768px)');

  if (isDesktop) {
    return (
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger>Report a website bug</DialogTrigger>
        <DialogContent className="sm:max-w[425px]">
          <DialogHeader>
            <DialogTitle>Report a website bug</DialogTitle>
            <DialogDescription>
              Found a bug? Let us know so we can fix it.
            </DialogDescription>
          </DialogHeader>
          <Form />
        </DialogContent>
      </Dialog>
    );
  }
  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger className="font-bold text-center tx-sm">
        Report a website bug
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader className="text-left">
          <DrawerTitle>Report a website bug</DrawerTitle>
          <DrawerDescription>
            Found a bug? Let us know so we can fix it.
          </DrawerDescription>
        </DrawerHeader>
        <Form className="px-4" />
        <DrawerFooter className="pt-2">
          <DrawerClose asChild>
            <Button variant="outline">Cancel</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}

const initialState = {
  message: '',
};

function Form({ className }: React.ComponentProps<'form'>) {
  const [state, formAction] = useFormState(submitIssue, initialState);
  return (
    <form
      action={formAction}
      className={cn('grid items-start gap-4', className)}
    >
      <div className="grid gap-2">
        <Label htmlFor="email">Your Email</Label>
        <Input type="email" id="email" name="email" required />
      </div>
      <div className="grid gap-2">
        <Label htmlFor="title">Issue Subject</Label>
        <Input type="text" id="title" name="title" required />
      </div>
      <div className="grid gap-2">
        <Label htmlFor="description">Issue Description</Label>
        <Textarea id="description" name="description" required />
      </div>
      <div className="flex gap-2">
        <Label htmlFor="checked">Contact me regarding this issue?</Label>
        <Checkbox id="checked" name="checked" />
      </div>
      <div>
        <p aria-live="polite" className=" ">
          {state?.message}
        </p>
      </div>
      <SubmitButton>Submit</SubmitButton>
    </form>
  );
}
