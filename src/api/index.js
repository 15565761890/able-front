import AXIOS from 'axios';
import CONFIG from '../config/config'

AXIOS.defaults.baseURL = CONFIG.apiBaseAddress;
AXIOS.defaults.withCredentials = true;

const HTTP_TYPE = {
	GET:0,
	POST:1,
	PUT:2,
	DELETE:3,
	UPLOAD:4
};
const HTTP_ERROR = {
	SUCCESS: 200,
	REQUEST_ERROR: 400,
	PARAMS_ERROR:  417,
	FAIL: 500,
	USER_NOT_LOGIN: 539,
	USER_ALREADY_LOGIN: 540,
	PERMISSION_DENY: 541,
	COURSE_NOT_EXISTS: 542,
	COURSEOUTLINE_NOT_EXISTS: 543,
	COURSEOUTLINE_ALREADY_EXISTS: 544,
	WX_ACCESSTOKEN_ERROR: 545,
	COURSENOTICE_NOT_EXISTS: 546,
	COURSENOTICECOMMENT_NOT_EXISTS: 547,
	ACCOUNT_OR_PASSWORD_ERROR: 548,
	MOBILE_NOT_EXISTS: 549,
	TOO_MANY_TIME: 550,
	EMAIL_NOT_EXISTS: 551,
	ACCOUNT_NOT_VERIFY: 552,
	VERIFYCODE_ERROR: 553,
	VERIFYCODE_EXPIRED: 554,
	ACCOUNT_ALREADY_EXISTS: 555,
	HELP_NOT_EXISTS: 556,
	JOB_NOT_EXISTS: 557,
	EDU_NOT_EXISTS: 558,
	STUDENT_NOT_EXISTS: 559,
	STUDENT_TYPE_ERROR: 560,
	COURSE_ALREADY_ENOUGH: 561,
	COURSE_REPEAT_JOIN: 562,
	TEACHER_BLACK: 563
}
const parseStrParams = (url,params) => {
	if(!params) return url;
	let newUrl = '?';
	for (let key in params)
		if(params.hasOwnProperty(key)) newUrl += `${key}=${params[key]}&`;
	newUrl = newUrl.substring(0,newUrl.length - 1);
	return url+newUrl;
}
const ApiServices = (type,url,params,progress) => {
	return new Promise((res,rej) => {
		switch (type) {
			case HTTP_TYPE.GET:
				AXIOS
					.get(parseStrParams(url,params))
					.then(result => res(result))
					.catch(error => rej(error));
				break;
			case HTTP_TYPE.POST:
				AXIOS
					.post(url,params)
					.then(result => res(result))
					.catch(error => rej(error));
				break;
			case HTTP_TYPE.PUT:
				AXIOS
					.put(url,params)
					.then(result => res(result))
					.catch(error => rej(error));
				break;
			case HTTP_TYPE.DELETE:
				AXIOS
					.delete(parseStrParams(url,params))
					.then(result => res(result))
					.catch(error => rej(error));
				break;
			case HTTP_TYPE.UPLOAD:
				AXIOS.defaults.headers.common['Content-Type'] = 'multipart/form-data';
				AXIOS({
					url,
					baseURL:CONFIG.uploadAPIBaseAddress,
					method:'post',
					onUploadProgress:progressEvent => {
						if (progress) progress(Math.floor((progressEvent.loaded / progressEvent.total) * 100));
					},
					data: params
				})
					.then(result => res(result))
					.catch(error => rej(error));
				break;
		}
	})
}
const ErrorHandle  = status => {
	if(status.message) return alert(status.message)
	else return alert('服务端500！',JSON.stringify(status))
}
export {ApiServices,HTTP_TYPE,ErrorHandle};