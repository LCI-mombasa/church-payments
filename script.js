function openMpesa() {
  var userAgent = navigator.userAgent || navigator.vendor || window.opera;

  if (/android/i.test(userAgent)) {
    // Try opening M-Pesa app on Android
    window.location = "mpesa://";
    setTimeout(function() {
      window.location = "https://play.google.com/store/apps/details?id=com.safaricom.mpesa";
    }, 2000);
  } else if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
    // Try opening M-Pesa app on iOS
    window.location = "mpesa://";
    setTimeout(function() {
      window.location = "https://apps.apple.com/ke/app/m-pesa/id1581016672";
    }, 2000);
  } else {
    alert("Please use your phone to open M-Pesa.");
  }
}
