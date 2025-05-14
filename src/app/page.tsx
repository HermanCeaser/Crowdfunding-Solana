'use client'

import CampaignCard from '@/components/CampaignCard'
import CampaignHero from '@/components/CampaignHero'
import { useEffect, useMemo, useState } from 'react'
import {
  fetchActiveCampaigns,
  getProviderReadonly,
} from '@/services/blockchain'
import { Campaign } from '@/utils/interfaces'

export default function Page() {
  const [campaigns, setCampaigns] = useState<Campaign[]>([])
  const [filter, setFilter] = useState<'all' | 'active' | 'expired'>('all')
  const program = useMemo(() => getProviderReadonly(), [])

  useEffect(() => {
    fetchActiveCampaigns(program!).then((data) => setCampaigns(data))
    // setCampaigns(campaignData);
  }, [program])


  const now = Math.floor(Date.now() / 1000)
  const filteredCampaigns = useMemo(() => {
    return campaigns.filter((c) => {
      if (filter === 'active') return now <= c.deadline
      if (filter === 'expired') return now > c.deadline
      return true
    })
  }, [campaigns, filter, now])

  return (
    <div className="container mx-auto p-6">
      <CampaignHero />
      <div className="h-10" />
      <h1 className="text-3xl font-bold mb-6">Explore Campaigns</h1>

      <div className="mb-6 flex space-x-2">
        <span
          role="button"
          onClick={() => setFilter('all')}
          className={`badge badge-primary badge-lg badge-soft ${filter === 'all' ? '' : 'badge-outline'
            } cursor-pointer`}
        >
          All
        </span>
        <span
          role="button"
          onClick={() => setFilter('active')}
          className={`badge badge-success badge-lg badge-soft ${filter === 'active' ? '' : 'badge-outline'
            } cursor-pointer`}
        >
          🟢 Active
        </span>
        <span
          role="button"
          onClick={() => setFilter('expired')}
          className={`badge badge-error badge-lg badge-soft ${filter === 'expired' ? '' : 'badge-outline'
            } cursor-pointer`}
        >
          🔴 Expired
        </span>
      </div>

      {campaigns.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {filteredCampaigns.map((campaign) => (
            <CampaignCard key={campaign.cid} campaign={campaign} />
          ))}
        </div>
      ) : (
        <div className="text-center py-16">
          <h2 className="text-2xl font-semibold text-gray-800">
            No campaigns available at the moment
          </h2>
          <p className="text-gray-600 mt-4">
            Be the first to create a campaign and make a difference!
          </p>
          <div className="mt-6">
            <a
              href="/create"
              className="inline-block bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded-lg"
            >
              Create a Campaign
            </a>
          </div>
        </div>
      )}
    </div>
  )
}
