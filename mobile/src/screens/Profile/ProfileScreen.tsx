import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../store';
import { logout } from '../../store/slices/authSlice';

const ProfileScreen = () => {
  const { user } = useSelector((state: RootState) => state.auth);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Profile</Text>
      <Text style={styles.text}>Name: {user?.first_name} {user?.last_name}</Text>
      <Text style={styles.text}>Email: {user?.email}</Text>
      <Text style={styles.text}>User ID: {user?.user_id}</Text>
      <Button title="Logout" onPress={handleLogout} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 24,
  },
  text: {
    fontSize: 16,
    marginBottom: 12,
  },
});

export default ProfileScreen;
