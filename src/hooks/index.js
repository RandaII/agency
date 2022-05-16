import {useEffect, useState} from "react";

// при пересечении элемента возвращает класс анимации
const useIntersectionObserver = (ref, animationName) =>{

  // проверка поступившего/поступивших ref на тип
  if (ref.current instanceof Node
    || Array.isArray(ref)
    || ref.current === undefined){

    const [animation, setAnimation] = useState(``);

    // при пересечении задает animationName
    const animationCB = (entries) => entries[0].isIntersecting && setAnimation(animationName);

    useEffect(() =>{
      const options = {
        rootMargin: '0px',
        threshold: 0.05
      };
      const observer = new IntersectionObserver(animationCB, options);

      // в случае если передан массив ref, назначаем наблюдение на каждый элемент
      if (Array.isArray(ref)){
        ref.forEach(({current}) => observer.observe(current));
      }
      else {
        observer.observe(ref.current);
      }
    }, [])

    return animation;
  }
  else {
    throw new Error(`Incorrect type of ref`);
  }
}

export {
  useIntersectionObserver
};