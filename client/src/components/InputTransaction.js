import React, {
	Fragment,
	useState
} from "react";

const InputTransaction = () => {

	const [description, setDescription] = useState("")

	const onSubmitForm = async e => {
		e.preventDefault();
		try {
			const body = { description };
			const response = await fetch("http://localhost:8000/transactions", {

				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify(body)
			});
			console.error(response);
			window.location = "/";

		} catch (error) {
			console.log(error.message);

		}
	}


	return (< Fragment >
		<h1 className="text-center mt-5" > Input Transaction </h1>

		<form className="d-flex mt-5" onSubmit={onSubmitForm}>
			<input type="text"
				className="form-control"
				value={description}
				onChange={e => setDescription(e.target.value)} />

			<button className="btn btn-success"> add </button>

		</form>


	</Fragment >);
};

export default InputTransaction;