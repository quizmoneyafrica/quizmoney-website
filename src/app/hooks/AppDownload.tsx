const useAppLink = () => {
  if (typeof window === "undefined") return ""; // Ensure it only runs on the client

  const userAgent = navigator.userAgent;
  let appLink = "";

  if (/iPhone|iPad|iPod/.test(userAgent)) {
    appLink = "https://apps.apple.com/us/app/YOUR_IOS_APP_ID";
  } else if (/Android/.test(userAgent)) {
    appLink = "https://play.google.com/store/apps/details?id=YOUR_ANDROID_APP_ID";
  } else {
    appLink = "https://www.google.com/search?q=Download+QuizMoney+app";
  }

  return appLink;
};

export default useAppLink;
