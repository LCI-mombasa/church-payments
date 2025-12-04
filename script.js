function openMpesa() {
  var userAgent = navigator.userAgent || navigator.vendor || window.opera;

  if (/android/i.test(userAgent)) {
    window.location = "https://play.google.com/store/apps/details?id=com.safaricom.mpesa";
  } else if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
    window.location = "https://apps.apple.com/ke/app/m-pesa/id1581016672";
  } else {
    alert("Please use your phone to open M-Pesa.");
  }
}
