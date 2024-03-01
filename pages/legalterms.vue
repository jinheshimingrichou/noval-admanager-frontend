<script lang="ts" setup>
import { simpleSiteUrl } from '@/constants/index'
</script>

<template>
    <div class="policy-container">
        <h1>Legal Terms</h1>
        <p>
            When visiting {{ simpleSiteUrl }} website and/or using its any software, game, you fully agree with its
            "Privacy Policy" and "Terms of Use" conditions. If you do not agree on any of these conditions, you are not
            allowed to use the website and/or its services. {{ simpleSiteUrl }} has the right to update and modify the
            policies any time. The visitors always should check the related pages to see updates.
        </p>
        <b>Access Restrictions</b>
        <p>
            {{ simpleSiteUrl }} website is suitable for the visitors over 13 year old, the younger visitors are
            suggested to use its service and games together with their parents.
        </p>
        <b>Proprietary Rights of the Games</b>
        <p>
            Most of the published games are submitted or suggested to us by their creators, proprietary rights owners.
            {{ simpleSiteUrl }} can not confirm if they have respected the others intellectual properties or rights.
            Upon receiving notification in accordance with any related copyright organization or owner,
            {{ simpleSiteUrl }} will immediately remove games in question.
        </p>
        <b>Outgoing and Incoming Links</b>
        <p>
            {{ simpleSiteUrl }} does not accept any responsibility about the websites which are linking to our website
            and the outgoing links in the games published at the website.
        </p>
        <b>Advertisements</b>
        <p>
            {{ simpleSiteUrl }} does not accept any responsibility about the advertisements which are published at the
            website.
        </p>
    </div>
</template>

<style scoped lang="scss">
.policy-container {
    min-height: calc(100vh - 90px);
    padding: 10px 20px;
    background-color: #f383a7;

    h1 {
        color: #fff;
        font-size: 30px;
        font-weight: bold;
        margin: 10px 0;
    }

    b {
        margin: 10px 0;
        margin-top: 6px;
        color: #fff;
        font-size: 1.2rem;
    }

    p {
        font-size: 1rem;
        color: #fff;
    }
}
</style>
