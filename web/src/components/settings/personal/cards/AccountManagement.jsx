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

import React from 'react';
import { Card, Typography, Avatar } from '@douyinfe/semi-ui';
import { IconLock, IconDelete } from '@douyinfe/semi-icons';
import { UserPlus, ShieldCheck } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const AccountManagement = ({
  t,
  userState,
  setShowChangePasswordModal,
  setShowAccountDeleteModal,
}) => {
  return (
    <Card className='!rounded-2xl'>
      {/* 卡片头部 */}
      <div className='flex items-center mb-4'>
        <Avatar size='small' color='teal' className='mr-3 shadow-md'>
          <UserPlus size={16} />
        </Avatar>
        <div>
          <Typography.Text className='text-lg font-medium'>
            {t('账户管理')}
          </Typography.Text>
          <div className='text-xs text-gray-600'>
            {t('密码修改和账户删除')}
          </div>
        </div>
      </div>

      <div className='py-4'>
        <div className='space-y-6'>
          {/* 密码管理 */}
          <Card className='!rounded-xl w-full'>
            <div className='flex flex-col sm:flex-row items-start sm:justify-between gap-4'>
              <div className='flex items-start w-full sm:w-auto'>
                <div className='w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center mr-4 flex-shrink-0'>
                  <IconLock size='large' className='text-slate-600' />
                </div>
                <div>
                  <Typography.Title heading={6} className='mb-1'>
                    {t('密码管理')}
                  </Typography.Title>
                  <Typography.Text type='tertiary' className='text-sm'>
                    {t('定期更改密码可以提高账户安全性')}
                  </Typography.Text>
                </div>
              </div>
              <button
                type='button'
                onClick={() => setShowChangePasswordModal(true)}
                className='inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-slate-600 rounded-lg hover:bg-slate-700 transition-colors w-full sm:w-auto'
              >
                <IconLock className='w-4 h-4 mr-2' />
                {t('修改密码')}
              </button>
            </div>
          </Card>

          {/* 危险区域 */}
          <Card className='!rounded-xl w-full'>
            <div className='flex flex-col sm:flex-row items-start sm:justify-between gap-4'>
              <div className='flex items-start w-full sm:w-auto'>
                <div className='w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center mr-4 flex-shrink-0'>
                  <IconDelete size='large' className='text-slate-600' />
                </div>
                <div>
                  <Typography.Title
                    heading={6}
                    className='mb-1 text-slate-700'
                  >
                    {t('删除账户')}
                  </Typography.Title>
                  <Typography.Text type='tertiary' className='text-sm'>
                    {t('此操作不可逆，所有数据将被永久删除')}
                  </Typography.Text>
                </div>
              </div>
              <button
                type='button'
                onClick={() => setShowAccountDeleteModal(true)}
                className='inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-slate-500 rounded-lg hover:bg-slate-600 transition-colors w-full sm:w-auto'
              >
                <IconDelete className='w-4 h-4 mr-2' />
                {t('删除账户')}
              </button>
            </div>
          </Card>
        </div>
      </div>
    </Card>
  );
};

export default AccountManagement;
