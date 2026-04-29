/*
Copyright (C) 2025 QuantumNous

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU Affero General Public License as
published by the Free Software Foundation, either version 3 of the
License, or (at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
GNU Affero General Public License for more details.

You should have received a copy of the GNU Affero General Public License
along with this program. If not, see <https://www.gnu.org/licenses/>.

For commercial licensing, please contact support@quantumnous.com
*/

import React, { useEffect, useState, useContext } from 'react';
import { useSearchParams } from 'react-router-dom';
import { API, showError, showInfo, showSuccess, renderQuota, setUserData } from '../../helpers';
import { useTranslation } from 'react-i18next';
import { UserContext } from '../../context/User';
import { StatusContext } from '../../context/Status';

import RechargeCard from './RechargeCard';

const TopUp = () => {
  const { t } = useTranslation();
  const [userState, userDispatch] = useContext(UserContext);

  const getUserQuota = async () => {
    let res = await API.get(`/api/user/self`);
    const { success, message, data } = res.data;
    if (success) {
      userDispatch({ type: 'login', payload: data });
      setUserData(data);
    } else {
      showError(message);
    }
  };

  useEffect(() => {
    getUserQuota().then();
  }, []);

  return (
    <div className='w-full max-w-7xl mx-auto relative min-h-screen lg:min-h-0 mt-[60px] px-2'>
      <RechargeCard
        t={t}
        userState={userState}
        renderQuota={renderQuota}
      />
    </div>
  );
};

export default TopUp;
