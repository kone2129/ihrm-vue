import {
  createAPI, createFileAPI
} from '@/utils/request'
export const organList = data => createAPI('/company/departments', 'get', data)
export const add = data => createAPI('/company/departments', 'post', data)
export const update = data => createAPI(`/company/departments/${data.id}`, 'put', data)
export const detail = data => createAPI(`/company/departments/${data.id}`, 'get', data)
export const remove = data => createAPI(`/company/departments/${data.id}`, 'delete',
  data)
export const changeDept = data => createAPI(`/company/departments/changeDept`, 'put', data)
export const saveOrUpdate = data => {
  return data.id ? update(data) : add(data)
}
