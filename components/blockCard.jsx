import { useState } from 'react'
export const BlockCard = ({ block }) => {
    
    const divisor = Math.pow(10, 18);
    const mevRewardRaw = block.blockMevReward
    const mevReward = mevRewardRaw/divisor
    const blockRewardRaw = block.blockReward
    const blockReward = blockRewardRaw/divisor
    const totalReward = blockReward+mevReward

    return (
        <div className="w-1/4 flex flex-col ">
        <div className="flex flex-col y-gap-2 px-2 py-3 bg-slate-100 rounded-b-md h-110 ">
            <div className="">
                <a className="text-xl text-blue-800" target = "_blank" href={`https://beaconcha.in/block/${block.blockNumber}`}>Block Number: {block.blockNumber}</a>
                <p className="text-xl text-gray-800"> Relay Tag: {block.relay ? block.relay.tag : 'No Relay'}</p>
                <a className="text-xl text-blue-800" target = "_blank" href={`https://etherscan.io/address/${block.feeRecipient}`}>Block Fee Recipient: {`${block.feeRecipient.substr(0,5)}...${block.feeRecipient.substr(block.feeRecipient.length-4)} `}</a>
                <p className="text-xl text-gray-800"> Block Reward: {blockReward.toFixed(4)} ETH</p>
                <a className="text-xl text-blue-800" target = "_blank" href={block.relay ? `https://etherscan.io/address/${block.relay.producerFeeRecipient}`:null}>MEV Fee Recipient: {block.relay ? `${block.feeRecipient.substr(0,5)}...${block.feeRecipient.substr(block.feeRecipient.length-4)}`: null}</a>
                <p className="text-xl text-gray-800"> MEV Reward: {mevReward.toFixed(4)} ETH</p>
                <p className="text-xl text-gray-800"> Total Reward: {totalReward.toFixed(4)} ETH</p>
            </div>
        </div>
    </div>
    )
}