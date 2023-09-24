import { Lucid, Blockfrost } from "lucid-cardano";

const handleConnectLucid = async function () {
    try {
        const lucid = await Lucid.new(
            new Blockfrost(
                "https://cardano-preview.blockfrost.io/api/v0",
                "previewad7caqvYiu70SZAKSYQKg3EE9WsIrcF3",
            ),
            "Preview",
        );

        const api = await window.cardano.nami.enable();
        lucid.selectWallet(api);

        return lucid;
    } catch (error) {
        console.log(error);
    }
};
