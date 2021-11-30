function checkSpam(str) {
  if(str.toLowerCase().includes('1xbet') || str.toLowerCase().includes('free')){
    return true;
  }
  else{
    return false;
  }
}
