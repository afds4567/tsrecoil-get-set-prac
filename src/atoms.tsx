import { atom, selector } from 'recoil'

export const minuteState = atom({
  key: "minutes",
  default:0,
})

//input으로 state를 가져오고 그 input을 수정해서 output으로 변경 (selector)
export const hourSelector = selector<number>({
  key: "hours",
  get: ({ get }) => {
    const minutes = get(minuteState);
    return minutes/60;
  },
  set: ({ set }, newValue) => {
    const minutes = Number(newValue) * 60;
    set(minuteState, minutes);
  },
});

