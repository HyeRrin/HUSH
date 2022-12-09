export default {
  SIGNUP: {
    PW_VALIDATION: /(?=.*[a-zA-ZS])(?=.*?[#?!@$%^&*-]).{8,}/,
    EMAIL_SUCCESS: {
      MESSAGE: 'ACCESS_SUCCESS',
      ALERT: '사용 가능한 이메일입니다.',
    },
    EMAIL_ERROR: {
      MESSAGE: 'KEY_ALREADY_EXISTS',
      ALERT: '이메일 중복을 확인해주세요.',
    },
    SIGNUP_SUCCESS: {
      MESSAGE: 'SIGN_UP_SUCCESS',
      ALERT: '회원가입 성공!',
    },
    INVALID_PASSWORD: {
      MESSAGE: 'INVALID_PASSWORD',
      ALERT:
        '영문(대소문자)과 특수문자를 포함한 8자리 이상의 비밀번호를 작성해주세요.',
    },
  },
};
