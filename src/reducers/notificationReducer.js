import toastr from 'toastr';

toastr.options = {
    "closeButton": false,
    "debug": false,
    "newestOnTop": false,
    "progressBar": true,
    "positionClass": "toast-top-right",
    "preventDuplicates": true,
    "onclick": null,
    "showDuration": "300",
    "hideDuration": "1000",
    "timeOut": "5000",
    "extendedTimeOut": "1000",
    "showEasing": "swing",
    "hideEasing": "linear",
    "showMethod": "fadeIn",
    "hideMethod": "fadeOut"
  }

export const notificationReducer = (state, action) => {
    switch(action.type) {
        case 'SUCCESS':
            return toastr.success(action.message)
        case 'ERROR':
            return (
                console.log(action),
                toastr.error(action.message))
        // case 'SUCCESS':
        //     return {success: true, message: action.message}
        // case 'ERROR':
        //     return {error: true, message: action.message}
        default:
            throw new Error('Unexpected Action')
    }
}