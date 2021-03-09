import React from "react";
import { View, Text, StyleSheet, Image, FlatList } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import moment from "moment";

// temporary data until we pull from Firebase
posts = [
    {
        id: "1",
        title: "Go Paperless with office",
        text:
            "Tap to scan documents and share",
        timestamp: 1569109273726,
        avatar: require("../../assets/tempAvatar.jpg"),
        image: require("../../assets/tempImage1.jpg")
    },
    {
        id: "2",
        title: "Screenshot found",
        text:
            "Edit, convert, share and do more..",
        timestamp: 1569109273726,
        avatar: require("../../assets/tempAvatar.jpg"),
        image: require("../../assets/tempImage1.jpg")
    },
    {
        id: "3",
        title: "Daisy shared a file with you",
        text:
            "Good Point, please add the slide...",
        timestamp: 1569109273726,
        avatar: require("../../assets/tempAvatar.jpg"),
        image: require("../../assets/tempImage1.jpg")
    },
    {
        id: "4",
        title: "Claim free storage",
        text:
            "Edit, convert, share and do more..",
        timestamp: 1569109273726,
        avatar: require("../../assets/tempAvatar.jpg")
    }
];

// export default class HomeScreen extends React.Component {


    const NotificationScreen = () => {
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.headerTitle}>Notifications</Text>
                </View>

                <FlatList
                    style={styles.feed}
                    data={posts}
                    renderItem={({ item }) => this.renderPost(item)}
                    keyExtractor={item => item.id}
                    showsVerticalScrollIndicator={false}
                ></FlatList>
            </View>
        );
    }


    renderPost = post => {
        return (
            <View style={styles.feedItem}>
                <Image source={post.avatar} style={styles.avatar} />
                <View style={{ flex: 1 }}>
                    <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                        <View>
                            <Text style={styles.name}>{post.title}</Text>
                        </View>
                        <Ionicons name="ios-more" size={24} color="#73788B" />
                    </View>
                    <Text style={styles.post}>{post.text}</Text>
                    <Text style={styles.timestamp}>{moment(post.timestamp).fromNow()}</Text>
                </View>
            </View>
        );
    };

    
//}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#EBECF4"
    },
    header: {
        paddingTop: 64,
        paddingBottom: 16,
        backgroundColor: "#FFF",
        alignItems: "center",
        justifyContent: "center",
        borderBottomWidth: 1,
        borderBottomColor: "#EBECF4",
        shadowColor: "#454D65",
        shadowOffset: { height: 5 },
        shadowRadius: 15,
        shadowOpacity: 0.2,
        zIndex: 10
    },
    headerTitle: {
        fontSize: 20,
        fontWeight: "500"
    },
    feed: {
        marginHorizontal: 16
    },
    feedItem: {
        backgroundColor: "#FFF",
        borderRadius: 5,
        padding: 8,
        flexDirection: "row",
        marginVertical: 8
    },
    avatar: {
        width: 36,
        height: 36,
        borderRadius: 18,
        marginRight: 16
    },
    name: {
        fontSize: 15,
        fontWeight: "500",
        color: "#454D65"
    },
    timestamp: {
        fontSize: 11,
        color: "#C4C6CE",
        marginTop: 4
    },
    post: {
        marginTop: 16,
        fontSize: 14,
        color: "#838899"
    },
    postImage: {
        width: undefined,
        height: 150,
        borderRadius: 5,
        marginVertical: 16
    }
});


export default NotificationScreen;