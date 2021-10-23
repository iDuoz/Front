import { notification } from 'antd';
import getProposalNotice from '../../../service/proposal/firebase/getTopFilterNotice';
import test from '../firebase/test';
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
const onlineTrue = (next, index) => {
  //FIXME default chaeeun Value

  const precedence = 1;
  const basic = {
    addRegion: ['부산', '대전', '청주'],
    age: 'adult',
    region: '대구',
  };
  const merit = {
    cooking: true,
    disaster: true,
    eco: false,
    education: true,
    government: false,
    online: true,
  };
  const defaultRegion = ['대구', '서울', '부산', '대전', '청주', '인천', '광주'];
  const defaultMerit = [];
  for (let i in merit) {
    if (merit[i] === true) {
      defaultMerit.push(i);
    }
  }

  const defaultRef = "'noticeProposal', 'merit'";
  console.log('🥨💛 | usermerit');
  console.log(defaultMerit);
  //   console.log(defaultRef.concat(`,'${defaultMerit[index]}'`));
  console.log(next);

  const firstProposal = [];
  const secondProposal = [];
  const thirdProposal = [];
  const fourthProposal = [];

  const precedenceOnline = {
    /**
     * @우선순위1 online merit myRegion
     */
    first: async () => {
      const firstTest = await test(defaultMerit[index], next);
      return {
        notices: firstTest.notices,
        lastNotice: firstTest.lastNotice,
      };
    },
    second: async () => {
      const secondTest = await getProposalNotice(next);
      return {
        notices: secondTest.notices,
        lastNotice: secondTest.lastNotice,
      };
    },
    third: async () => {},
    fourth: async () => {},
  };

  return precedenceOnline.second;
};

export default onlineTrue;
