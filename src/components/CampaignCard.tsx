import { Campaign } from '@/utils/interfaces'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaCoins, FaUsers } from 'react-icons/fa'

const CampaignCard: React.FC<{ campaign: Campaign }> = ({ campaign }) => {
  const now = Math.floor(Date.now() / 1000)
  const isExpired = now > campaign.deadline

  const progressPercentage = Math.min(
    (campaign.amountRaised / campaign.goal) * 100,
    100
  )

  const statusBg = isExpired ? 'bg-red-100 text-red-800' : 'bg-green-100 text-green-800'
  const statusText = isExpired ? '🔴 Expired' : '🟢 Active'

  return (
    <div className="relative max-w-sm bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300">
      <Image
        src={campaign.imageUrl}
        alt={`${campaign.title} campaign`}
        width={300}
        height={150}
        className="w-full h-48 object-cover"
      />
      <div className="absolute top-2 right-2">
        <span className={`px-2 py-1 text-xs font-semibold rounded ${statusBg}`}>
          {statusText}
        </span>
      </div>

      <div className="p-6">
        <h2 className="text-xl font-bold text-gray-800 truncate">
          {campaign.title}
        </h2>
        <p className="text-gray-600 text-sm mt-2 truncate">
          {campaign.description.length > 100
            ? `${campaign.description.substring(0, 100)}...`
            : campaign.description}
        </p>
        <div className="mt-4">
          <div className="h-2 bg-gray-200 rounded-full">
            <div
              className="h-2 bg-green-500 rounded-full"
              style={{ width: `${progressPercentage}%` }}
            />
          </div>
          <div className="flex justify-between items-center mt-2 text-sm">
            <span className="text-gray-700 flex items-center space-x-1">
              <FaCoins className="text-green-500" />
              <strong>
                {campaign.amountRaised.toLocaleString()} /{' '}
                {campaign.goal.toLocaleString()} SOL
              </strong>
            </span>
            <span className="text-gray-700 flex items-center space-x-1">
              <FaUsers className="text-black" />
              <strong>{campaign.donors}</strong> Donors
            </span>
          </div>
        </div>
        <div className="mt-2 w-full flex flex-col lg:flex-row gap-2">
          <Link
            href={`/campaign/${campaign.publicKey}`}
            className="w-full mt-2 bg-green-600 hover:bg-green-700 
          text-white text-sm font-semibold py-2 px-4 rounded-lg block text-center flex-1"
          >
            Donate
          </Link>
          <Link
            href={`/campaign/${campaign.publicKey}`}
            className="w-full mt-2 bg-gray-200 text-green-600 hover:bg-green-100 font-semibold py-2 px-4 rounded-lg text-sm rounded-lg block text-center flex-1"
          >
            View Campaign
          </Link>
        </div>
      </div>
    </div>
  )
}

export default CampaignCard
