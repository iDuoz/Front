import getOnlineFalse from '../firebase/getOnlineFalse';
import store from '../../../store/store';
import test from '../firebase/test';

/**
 * @description online FALSE Filter
 * @우선순위1 !online merit myRegion
 * @우선순위2 !online merit addRegion
 * @우선순위3 !online merit !myRegion !addRegion
 * @우선순위4 !online !merit !mtRegion !addRegion
 * @우선순위5 !online
 * @age user {AGE}
 * @online {FALSE}
 * @merit user{[MERIT]}
 * @myRegion user{MY-REGION}
 * @addRegion user{ADD-REGION}
 * @method GET
 * @request @user {AGE , MERIT , MY-REGION, ADD-REGION}
 * @returns notices , lastNotice
 */

const onlineFalse = (precedence, index) => {
  console.log('🥨💛 | proposal logic');

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

  const precedenceOnlineFalse = {
    /**
     * @우선순위1 !online merit myRegion  */
    first: async () => {
      console.log('💢onlineFalse first');
      const firstTest = await getOnlineFalse(myMerits[index], [myRegion], myAge);
      console.log(firstTest.doc);
      return await firstTest.doc;
    },
    /**
     * @우선순위2 !online merit addRegion */
    second: async () => {
      console.log('💢onlineFalse second');
      const secondTest = await getOnlineFalse(myMerits[index], myAddRegion, myAge);
      return secondTest.doc;
    },
    /**
     * @우선순위3 !online merit !myRegion !addRegion */
    third: async () => {
      console.log('💢onlineFalse third');
      const thirdTest = await getOnlineFalse(myMerits[index], notMyRegions, myAge);
      return thirdTest.doc;
    },
    /**
     * @우선순위4 !online !merit !mtRegion !addRegion */

    fourth: async () => {
      console.log('💢onlineFalse fourth');
      const fourthTest = await getOnlineFalse(notMyMerits[index], notMyRegions, myAge);
      return fourthTest.doc;
    },
    /**
     * @우선순위4 !online*/

    fifth: async () => {
      const fifthTest = await test('online', regionReducer, myAge);
      return fifthTest.doc;
    },
  };

  if (precedence === 1) return precedenceOnlineFalse.first;
  if (precedence === 2) return precedenceOnlineFalse.second;
  if (precedence === 3) return precedenceOnlineFalse.third;
  if (precedence === 4) return precedenceOnlineFalse.fourth;
  if (precedence === 5) return precedenceOnlineFalse.fifth;
};

export default onlineFalse;
