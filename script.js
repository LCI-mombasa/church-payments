function openMpesa() {
  var userAgent = navigator.userAgent || navigator.vendor || window.opera;

  // Show clear instructions first
  alert("To give your offering:\n\n1. Open the M-Pesa app yourself.\n2. Go to Lipa na M-Pesa > Paybill.\n3. Enter Paybill: 836337\n4. Account: Church Offering\n5. Enter amount and confirm.\n\nIf you don't have the app, you'll be redirected to install it.");

  // Then provide fallback links
  if (/android/i.test(userAgent)) {
    setTimeout(function() {
      window.location = "https://play.google.com/store/apps/details?id=com.safaricom.mpesa";
    }, 2000);
  } else if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
    setTimeout(function() {
      window.location = "https://apps.apple.com/ke/app/m-pesa/id1581016672";
    }, 2000);
  } else {
    console.log("Please use your phone to open M-Pesa.");
  }
}
