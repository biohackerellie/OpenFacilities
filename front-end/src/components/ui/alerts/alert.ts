import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const MySwal = withReactContent(Swal);

function Alert(title: string, text: string, icon: any) {
  MySwal.fire(title, text, icon);
}

export { Alert };
