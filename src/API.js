import request from "superagent";

export default class API {

	post(url, data = null) {
		//Seta a URL da requisição
		let currentRequest = request.post(url);

		//Adiciona os parâmetros de dados para a requisição
		if(data != null) {
			let send = typeof data == 'string' ? data : this.serialize(data);
			currentRequest.send(send);
		}

		//Seta o callback para a função que irá resolver de acordo com o tipo de response
		return new Promise((resolve, reject) => {
			currentRequest.end((error, response) => {
				error ? reject(error) : resolve(response);
			});
		});
	}

	get(url, data = null) {
		//Seta a URL da requisição
		let currentRequest = request.get(url);

		//Adiciona os parâmetros de dados para a requisição
		if(data != null) {
			let query = typeof data == 'string' ? data : this.serialize(data);
			currentRequest.query(query);
		}

		//Seta o callback para a função que irá resolver de acordo com o tipo de response
		return new Promise((resolve, reject) => {
			currentRequest.end((error, response) => {
				error ? reject(error) : resolve(response);
			});
		});
	}

	serialize(obj) {
		let str = [], p;
		for(p in obj) {
			if (obj.hasOwnProperty(p)) {
				let k = p, v = obj[p];
				str.push((v !== null && typeof v === "object") ?
					serialize(v, k) :
					encodeURIComponent(k) + "=" + encodeURIComponent(v));
			}
		}
		return str.join("&");
	}
}
