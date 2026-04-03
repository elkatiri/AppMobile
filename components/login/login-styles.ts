import { StyleSheet } from 'react-native';

export const loginStyles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flexGrow: 1,
    justifyContent: 'center',
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 10,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
  },
  titleSpan: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#ff5900',
  },
  subtitle: {
    textAlign: 'center',
    color: '#555',
    marginBottom: 25,
  },
  inputContainer: {
    width: '100%',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    padding: 12,
    marginBottom: 12,
  },
  inputFocused: {
    borderColor: '#ff5900',
    backgroundColor: 'rgba(255, 89, 0, 0.05)',
  },
  button: {
    marginTop: 20,
    backgroundColor: '#ff5900',
    borderRadius: 25,
    padding: 15,
    alignItems: 'center',
  },
  buttonPressed: {
    opacity: 0.8,
    transform: [{ scale: 0.97 }],
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});