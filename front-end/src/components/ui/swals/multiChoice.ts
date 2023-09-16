import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import { IAlert } from '@/lib/types';

const MySwal = withReactContent(Swal);

async function multiChoiceAlert(props: IAlert) {
  try {
    const result = await MySwal.fire({
      title: props.title,
      text: props.text,
      icon: props.icon,
      showCancelButton: props.showCancelButton,
      showDenyButton: props.showDenyButton,
      confirmButtonText: props.confirmButtonText,
      denyButtonText: props.denyButtonText,
      cancelButtonText: props.cancelButtonText,
    });

    if (result.isConfirmed) {
      if (props.onConfirm) {
        await props.onConfirm(props.id);
      }
      MySwal.fire(
        props.onConfirmText.title,
        props.onConfirmText.text,
        props.onConfirmText.icon
      );
    } else if (result.dismiss === Swal.DismissReason.close) {
      MySwal.fire('Cancelled', 'You Have Canceled This Operation.');
    } else if (result.isDenied) {
      if (props.onDeny) {
        await props.onDeny(props.id);
      }
      MySwal.fire(
        props.onDenyText.title,
        props.onDenyText.text,
        props.onDenyText.icon
      );
    }
  } catch (error) {
    console.error('An issue has occurred: ', error);
    MySwal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Something went wrong! Please try again.',
    });
  }
}

export { multiChoiceAlert };
