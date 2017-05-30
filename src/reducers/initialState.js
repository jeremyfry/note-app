export default {
	user: {
		authenticated: false,
		username: '',
		role: null
	},
	notes: {
		newNoteVisible: false,
		noteList: [{
			id: "1",
			title: "Something Happened",
			text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting.",
			date: "2017-02-05 11:25:00",
			createdBy: "manager",
			editing: false,
			geo: {
				lat: 42.1845,
				lon: -83.589
			}
		}, {
			id: "2",
			title: "Something Happened Again!",
			text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. ",
			date: "2017-03-07 14:25:00",
			createdBy: "manager",
			editing: false,
			geo: {
				lat: 42.1859,
				lon: -83.5884
			}
		}]
	},
	geo: {
		useCurrentLocation: false,
		lat: 0,
		lon: 0
	},
	login: {
		error: ""
	}
};
