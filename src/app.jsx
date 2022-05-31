import UsersList from './components/UsersList';

const USERS = [
	{
		name: 'Pablo Castellanos',
		active: true,
		role: 'teacher'
	},
	{
		name: 'Jose Miguel Fernández',
		active: true,
		role: 'teacher'
	},
	{
		name: 'David Pons',
		active: true,
		role: 'student'
	},
	{
		name: 'Javier López',
		active: false,
		role: 'other'
	}
];

const App = () => (
	<UsersList users={USERS}>
		<h1>Listado de usuarios</h1>
	</UsersList>
);

export default App;
