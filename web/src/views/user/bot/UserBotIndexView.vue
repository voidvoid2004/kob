<template>
    <ContentField>
        用户机器人
    </ContentField>
</template>

<script>
import ContentField from "@/components/ContentField";
import $ from 'jquery';
import { useStore } from "vuex";


export default {
    components: {
        ContentField,
    },
    setup() {
        const store = useStore();

        $.ajax({
            url: "http://127.0.0.1:3010/user/bot/getlist/",
            type: "get",
            headers: {
                Authorization: "Bearer " + store.state.user.token,
            },

            success(resp) {
                console.log(resp);
            },
            error(resp) {
                console.log(resp);
            },
        })

        // $.ajax({
        //     url: "http://127.0.0.1:3010/user/bot/update/",
        //     type: "post",
        //     data: {
        //         bot_id: 1,
        //         title: "Bot的标题1",
        //         description: "Bot的描述1",
        //         content: "Bot的代码1",
        //     },
        //     headers: {
        //         Authorization: "Bearer " + store.state.user.token,
        //     },

        //     success(resp) {
        //         console.log(resp);
        //     },
        //     error(resp) {
        //         console.log(resp);
        //     },
        // })

        // $.ajax({
        //     url: "http://127.0.0.1:3010/user/bot/add/",
        //     type: "post",
        //     data: {
        //         title: "Bot的标题",
        //         description: "Bot的描述",
        //         content: "Bot的代码",
        //     },
        //     headers: {
        //         Authorization: "Bearer " + store.state.user.token, 
        //     },

        //     success(resp) {
        //         console.log(resp);
        //     }, 
        //     error(resp) {
        //         console.log(resp);
        //     },
        // })
        // $.ajax({
        //     url: "http://127.0.0.1:3010/user/bot/remove/",
        //     type: "post",
        //     data: {
        //         bot_id: "3",
        //     },
        //     headers: {
        //         Authorization: "Bearer " + store.state.user.token,
        //     },

        //     success(resp) {
        //         console.log(resp);
        //     },
        //     error(resp) {
        //         console.log(resp);
        //     },
        // })
    }
}
</script>

<style scoped></style>