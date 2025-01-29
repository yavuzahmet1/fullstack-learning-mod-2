
const initial = {
  yapilacaklar: [
    { id: 1, task: "Redux çalışıyoruz", completed: false },
    { id: 2, task: "köpekleri gezdir", completed: true },
  ],
};

//mutfak
const todoReducer = (
  state = initial,
  { type, payload }
) => {
  switch (type) {
    case "EKLE":
      return {yapilacaklar:[...state.yapilacaklar,{id:3,task:payload , completed:false}]};


      case "SIL":
        return {yapilacaklar:state.yapilacaklar.filter((s)=>s!==payload)}


case "DEGISTIR":
  return {yapilacaklar:state.yapilacaklar.map((a)=>a.task===payload ? {...a,completed: !a.completed}:a)}

    default:
      return state;
  }
};

export default todoReducer