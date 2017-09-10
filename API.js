import request from "superagent";
/*import uuid from "uuid/v4";*/

export default class API {

	post(url, options = {}) {
		//Executa o beforeSend caso setado
		if(options.beforeSend) {
			try {
				options.beforeSend()
			} catch(e) {
				throw new Error(e);
			}
		}

		//Seta a URL da requisição
		let currentRequest = request.post(url);

		//Adiciona os parâmetros de dados para a requisição
		if(options['data']) {
			currentRequest.send(typeof options['data'] == 'string' ? options['data'] : this.serialize(options['data']));
		}

		//Seta o callback para a função que irá resolver de acordo com o tipo de response
		currentRequest.end(this.requestCallback.bind(this, options));
	}

	get(url, options = {}) {

		//Executa o beforeSend caso setado
		if(options.beforeSend) {
			try {
				options.beforeSend()
			} catch(e) {
				throw new Error(e);
			}
		}

		//Seta a URL da requisição
		let currentRequest = request.get(url);

		//Adiciona os parâmetros de dados para a requisição
		if(options['data'] && typeof options['data'] == 'object') {
			currentRequest.query(options['data']);
		}

		//Seta o callback para a função que irá resolver de acordo com o tipo de response
		currentRequest.end(this.requestCallback.bind(this, options));
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

	requestCallback(options, error, response) {
		const requestStatus = {
			success: 200,
			error: 500,
			notFound: 404,
			forbidden: 403
		}

		switch (response.status) {
			case requestStatus.success:

				if(options.onSuccess) {
					try {
						options.onSuccess(response)
					} catch(e) {
						throw new Error(e);
					}
				}

				break;

			case requestStatus.error:
			case requestStatus.notFound:

				if(options.onError) {
					try {
						options.onError(error)
					} catch(e) {
						throw new Error(e);
					}
				}

				console.error(
					response.text,
					`\n\n\tThis error was due a request to:`, response.req.url, `\n`,
					`\tReturned error: `, response.statusText, "(", response.status, ")"
				);

				break;

			case requestStatus.forbidden:
				window.location.reload();
				break;


			if(options.onComplete) {
				try {
					options.onComplete(error, response);
				} catch(e) {
					throw new Error(e);
				}
			}
		}
	}
}