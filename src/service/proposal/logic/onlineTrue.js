import { notification } from 'antd';
import getProposalNotice from '../../../service/proposal/firebase/getTopFilterNotice';
import test from '../firebase/test';
import store from '../../../store/store';

/**
 * @description online TRUE Filter
 * @우선순위1 online merit myRegion
 * @우선순위2 online merit addRegion
 * @우선순위3 online merit !myRegion !addRegion
 * @우선순위4 online !merit !mtRegion !addRegion
 * @age user {AGE}
 * @online {TRUE}
 * @merit user{[MERIT]}
 * @myRegion user{MY-REGION}
 * @addRegion user{ADD-REGION}
 * @method GET
 * @request @user {AGE , MERIT , MY-REGION, ADD-REGION}
 * @returns notices , lastNotice
 */
const onlineTrue = (precedence, index) => {
  //FIXME default chaeeun Value
  console.log('🥨💛 | proposal logic');

  const basic = {
    addRegion: ['대구', '서울', '부산', '대전', '청주', '인천', '광주'],
    age: 'adult',
    region: '대구',
  };
  const basicMerit = ['cooking', 'disaster', 'eco', 'education', 'government', 'online'];

  const merit = store.getState().user_reducer.merit;
  const region = store.getState().user_reducer.basic.region;
  const addRegion = store.getState().user_reducer.basic.addRegion;
  const age = store.getState().user_reducer.basic.age;
  const regionReducer = store.getState().region_reducer.region;

  const defaultRegion = regionReducer.filter((arr) => arr !== region);
  const myMerits = [];
  for (let i in merit) {
    if (merit[i] === true) {
      if (i === 'online') continue;
      myMerits.push(i);
    }
  }
  const myRegion = region;
  const myAddRegion = addRegion;
  const myAge = age;
  const notMyRegions = defaultRegion.filter((arr) => !myAddRegion.includes(arr));
  const notMyMerits = basicMerit.filter((arr) => !myMerits.includes(arr));
  console.log('🥨💛 | usermerit');
  console.log(store.getState().user_reducer.merit);
  console.log(myMerits);
  console.log(myRegion);
  console.log(myAge);
  console.log(myAddRegion);
  console.log(notMyRegions);
  console.log(notMyMerits);
  //   console.log(defaultRef.concat(`,'${defaultMerit[index]}'`));

  const precedenceOnline = {
    /**
     * @우선순위1 online merit myRegion  */
    first: async () => {
      console.log('💢onlineTrue first');
      const firstTest = await test(myMerits[index], [myRegion], myAge);
      await console.log(firstTest.doc);
      return await firstTest.doc;
    },
    /**
     * @우선순위2 online merit addRegion */
    second: async () => {
      console.log('💢onlineTrue second');
      const secondTest = await test(myMerits[index], myAddRegion, myAge);
      return secondTest.doc;
    },
    /**
     * @우선순위3 online merit !myRegion !addRegion */
    third: async () => {
      console.log('💢onlineTrue third');
      const thirdTest = await test(myMerits[index], notMyRegions, myAge);
      return thirdTest.doc;
    },
    /**
     * @우선순위4 online !merit !mtRegion !addRegion */

    fourth: async () => {
      console.log('💢onlineTrue fourth');
      const fourthTest = await test(notMyMerits[index], notMyRegions, myAge);
      return fourthTest.doc;
    },
    fifth: async () => {
      const fifthTest = await test('online', regionReducer, myAge);
      return fifthTest.doc;
    },
  };

  if (precedence === 1) return precedenceOnline.first;
  if (precedence === 2) return precedenceOnline.second;
  if (precedence === 3) return precedenceOnline.third;
  if (precedence === 4) return precedenceOnline.fourth;
  if (precedence === 5) return precedenceOnline.fifth;
};

export default onlineTrue;
