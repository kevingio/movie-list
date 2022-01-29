import axios from 'axios';
import Swal from 'sweetalert2';

const client = axios.create({
  baseURL: `${process.env.REACT_APP_BASE_URL}`,
});

client.interceptors.response.use(undefined, (err) => {
  const error = err?.response;

  if (error?.status === 500) {
    Swal.fire({
      icon: 'error',
      title: 'Server Error',
      text: 'Mohon coba kembali lagi nanti',
    });
  } else if (error?.status === 400) {
    Swal.fire({
      icon: 'error',
      title: 'Bad Request',
      text: error.data.result.message,
    });
  } else if (error?.code === 'ECONNABORTED') {
    return Swal.fire({
      icon: 'error',
      title: 'Koneksi Bermasalah',
      text: 'Tolong cek kondeksi anda kembali',
    }).then(() => {
      window.location.reload();
    });
  } else {
    Swal.fire({
      icon: 'error',
      title: 'Oops',
      text: 'Something went wrong!',
    });
  }

  return error;
});

export default client;
