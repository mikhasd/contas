function isReady(){
  return document.readyState === 'complete'
}

function schedulerHandler(handler){
  document.addEventListener('readystatechange', ev => {
    if(isReady()){
      handler()
    }
  })
}

export default function (handler){
  if(isReady()){
    handler()
  } else {
    schedulerHandler(handler)
  }  
}