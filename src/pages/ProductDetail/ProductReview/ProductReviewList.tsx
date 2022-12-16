import React, { useState, useEffect } from 'react';

function DetailReviewList({ content }: any) {
  const [userEmail, setUserEmail] = useState('rkdfnql22@naver.com');

  useEffect(() => {
    const id = userEmail.split('@')[0];
    const mail = userEmail.split('@')[1];

    const maskingId = (masking: string) => {
      let splitId = masking.substring(0, 1);
      for (let i = 1; i < masking.length; i += 1) {
        splitId += '*';
      }
      return splitId;
    };

    const maskingMail = (masking: string) => {
      let splitMail = '';
      for (let i = 1; i < masking.length; i += 1) {
        splitMail += '*';
      }
      splitMail += masking.substring(masking.length - 1, masking.length);
      return splitMail;
    };

    setUserEmail(`${maskingId(id)}@${maskingMail(mail)}`);
  }, []);

  const date = new Date();
  const year = date.getFullYear();
  const month = `0${date.getMonth() + 1}`;
  const day = `0${String(date.getDate()).slice(-2)}`;
  const dateStr = `${year} - ${month} - ${day}`;

  return (
    <>
      {content.map((item: string) => {
        return (
          <li key={item}>
            <div className="box">
              <div className="review-top">
                <div className="writer">{userEmail}</div>
                <div className="date">{dateStr}</div>
              </div>
              <div className="review-content">{item}</div>
            </div>
          </li>
        );
      })}
    </>
  );
}

export default DetailReviewList;
