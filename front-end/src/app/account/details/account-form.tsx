import { Separator } from '@/components/ui/separator';
import { SubmitButton } from '@/components/ui/buttons/submitButton';
import { Update } from './actions';

interface UserName {
  id: string;
  name: string;
  email: string;
}

export default function AccountForm({ data }: { data: UserName }) {
  const updateUserID = Update.bind(null, data.id);
  let disabled = false;
  if (data.email.includes('@laurel.k12.mt.us')) {
    disabled = true;
  }
  return (
    <form action={updateUserID} className="space-y-8">
      <label className="block font-bold text-lg">Name: {data.name} </label>
      <input
        className="form-input ring-transparent text-black rounded-sm border-forground"
        name="name"
        type="text"
        id="name"
        disabled={disabled}
        placeholder={data.name}
      />
      <p className="text-md text-muted-foreground">
        The name of the individual or organization on the account. Staff
        accounts can not update their names.
      </p>
      <Separator />
      <label className="block font-bold text-lg">Email: {data.email} </label>
      <input
        className="form-input ring-transparent text-black rounded-sm border-forground"
        name="email"
        type="email"
        id="email"
        disabled={disabled}
        placeholder={data.email}
      />
      <p className="text-md text-muted-foreground">
        The email address associated with the account. Public Users may update
        at any time. If your account is an LPS account, please contact an
        administrator to update your email address on the account.
      </p>
      <Separator />
      <SubmitButton className="float-right" />
    </form>
  );
}
