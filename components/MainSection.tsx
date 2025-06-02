import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  Dimensions,
  TouchableOpacity,
} from 'react-native';

const screenWidth = Dimensions.get('window').width;

const images = [
  { src: require('../assets/img1.jpg') },
  { src: require('../assets/img2.jpg') },
  { src: require('../assets/img3.jpg') },
  { src: require('../assets/img4.jpg') },
  { src: require('../assets/img5.jpg') },
  { src: require('../assets/img6.jpg') },
  { src: require('../assets/img7.jpg') },
  { src: require('../assets/img8.jpg') },
  { src: require('../assets/img9.jpg') },
  { src: require('../assets/img10.jpg') },
  { src: require('../assets/img11.jpg') },
  { src: require('../assets/img12.jpg') },
];

export default function MainSection() {
  return (
    <View style={styles.container}>
      {/* Profile header */}
      <View style={styles.headerRow}>
        <Image source={require('../assets/profile.jpg')} style={styles.avatar} />
        <View style={styles.statsContainer}>
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>53</Text>
            <Text>Posts</Text>
          </View>
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>12</Text>
            <Text>Members</Text>
          </View>
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>1</Text>
            <Text>Admins</Text>
          </View>
        </View>
      </View>

      {/* Description */}
      <Text style={styles.nameText}>OOTD Everyday</Text>
      <Text style={styles.bioText}>Fit check! 👕</Text>
      <Text style={styles.bioText}>You know we'll hype you up.</Text>

      {/* Member dropdown */}
      <TouchableOpacity style={styles.memberButton}>
        <Text style={styles.memberButtonText}>Member ⌄</Text>
      </TouchableOpacity>

      {/* Photo grid */}
      <FlatList
        data={images}
        renderItem={({ item }) => (
          <Image source={item.src} style={styles.gridImage} />
        )}
        keyExtractor={(item, index) => index.toString()}
        numColumns={3}
        scrollEnabled={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#fff',
  },
  profileHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  avatar: {
    width: 64,
    height: 64,
    borderRadius: 32,
    marginRight: 12,
  },
  groupTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  username: {
    fontSize: 14,
    color: '#666',
  },
  statsRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 12,
  },
  statText: {
    textAlign: 'center',
    fontSize: 14,
    fontWeight: '600',
  },
  nameText: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 2,
  },
  bioText: {
    fontSize: 14,
    color: '#444',

  },
memberButton: {
  alignSelf: 'center',           
  width: 320,                    
  height: 36,
  backgroundColor: 'white',
  borderWidth: 1,
  borderColor: '#ccc',
  borderRadius: 8,
  justifyContent: 'center',
  alignItems: 'center',
  marginVertical: 12,
},
memberButtonText: {
  fontSize: 14,
  fontWeight: '600',
  color: '#000',
},
  gridImage: {
    width: screenWidth / 3,
    height: screenWidth / 3,
    borderWidth: 0.5,
    borderColor: '#ccc',
  },
  headerRow: {
  flexDirection: 'row',
  alignItems: 'center',
  marginBottom: 16,
},

statsContainer: {
  flexDirection: 'row',
  justifyContent: 'space-around',
  flex: 1, 
},

statItem: {
  alignItems: 'center',
  marginHorizontal: 6,
},

statNumber: {
  fontWeight: 'bold',
  fontSize: 16,
},

});
