import { useState } from 'react'
import { 
  TrendingUp, 
  TrendingDown,
  ChevronDown
} from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

export default function Dashboard() {
  const [selectedTimeRange, setSelectedTimeRange] = useState('1Y')
  const [selectedPeriod, _ ] = useState('Daily')
  const timeRanges = ['ALL', '1M', '3M', '6M', '1Y']
  const newUsers = [
    {
      time: '10:12 AM',
      name: 'Bereket Engida',
      method: 'OAuth',
      device: 'Mobile/Safari'
    },
    {
      time: '10:12 AM',
      name: 'Jhon Doe',
      method: 'Email',
      device: 'Desktop/Chrome'
    },
    {
      time: '10:12 AM',
      name: 'Kinfe Tariky',
      method: 'Passkey',
      device: 'Mobile/Chrome'
    },
    {
      time: '10:12 AM',
      name: 'Bereket Engida',
      method: 'OAuth',
      device: 'Mobile/Safari'
    },
    {
      time: '10:12 AM',
      name: 'Jhon Doe',
      method: 'Email',
      device: 'Desktop/Chrome'
    }
  ]

  return (
    <div className="space-y-8 animate-fade-in">
      {/* Welcome Message */}
      <div className="px-6 pt-8">
        <h1 className="text-xl text-white font-normal">Welcome Back, Bereket</h1>
        <p className="text-sm text-gray-400 mt-1 font-light">Mar 18 Tue, 12:57 AM</p>
      </div>

      {/* Main Stats Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 px-6">
        {/* Total Users Card */}
        <Card className="border-white/10 bg-black/50 rounded-none">
          <CardHeader className="pb-6">
            <CardTitle className="text-white text-xl font-normal">10.2k</CardTitle>
            <CardDescription className="text-gray-300 text-xs font-light uppercase tracking-wide">Total User</CardDescription>
          </CardHeader>
          <CardContent className="pt-0">
            {/* Time Range Selector */}
            <div className="flex space-x-1 mb-6">
              {timeRanges.map((range) => (
                <Button
                  key={range}
                  variant={selectedTimeRange === range ? "default" : "ghost"}
                  size="sm"
                  className={`text-xs px-3 py-1.5 h-7 font-light ${
                    selectedTimeRange === range 
                      ? 'bg-white/10 text-white border border-white/20' 
                      : 'text-gray-400 hover:text-white hover:bg-white/5'
                  }`}
                  onClick={() => setSelectedTimeRange(range)}
                >
                  {range}
                </Button>
              ))}
            </div>
            
            {/* Chart Placeholder */}
            <div className="h-28 bg-white/5 rounded-none flex items-end justify-between px-3 pb-3">
              {[23, 45, 32, 67, 89, 54].map((height, index) => (
                <div
                  key={index}
                  className="bg-white/20 w-6 rounded-none transition-all duration-300 hover:bg-white/30"
                  style={{ height: `${height}%` }}
                ></div>
              ))}
            </div>
            <div className="flex justify-between text-xs text-gray-400 mt-3 font-light">
              <span>23 Oct</span>
              <span>28 Oct</span>
            </div>
          </CardContent>
        </Card>

        {/* Total Subscription Card */}
        <Card className="border-white/10 bg-black/50 rounded-none">
          <CardHeader className="pb-6">
            <CardTitle className="text-white text-xl font-normal">$1243.22</CardTitle>
            <CardDescription className="text-gray-300 text-xs font-light uppercase tracking-wide">Total Subscription</CardDescription>
          </CardHeader>
          <CardContent className="pt-0">
            {/* Time Range Selector */}
            <div className="flex space-x-1 mb-6">
              {timeRanges.map((range) => (
                <Button
                  key={range}
                  variant={selectedTimeRange === range ? "default" : "ghost"}
                  size="sm"
                  className={`text-xs px-3 py-1.5 h-7 font-light ${
                    selectedTimeRange === range 
                      ? 'bg-white/10 text-white border border-white/20' 
                      : 'text-gray-400 hover:text-white hover:bg-white/5'
                  }`}
                  onClick={() => setSelectedTimeRange(range)}
                >
                  {range}
                </Button>
              ))}
            </div>
            
            {/* Chart Placeholder */}
            <div className="h-28 bg-white/5 rounded-none flex items-center justify-center">
              <div className="w-full h-0.5 bg-white/30 rounded-full"></div>
            </div>
            <div className="flex justify-between text-xs text-gray-400 mt-3 font-light">
              <span>23 Oct</span>
              <span>28 Oct</span>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Bottom Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 px-6 pb-8">
        {/* Left Column - Stats Cards */}
        <div className="space-y-6">
          {/* Active Users Card */}
          <Card className="border-white/10 bg-black/50 rounded-none">
            <CardHeader className="pb-4">
              <div className="flex items-center justify-between">
                <CardTitle className="text-white text-base font-normal">Active Users</CardTitle>
                <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white p-0 h-auto font-light">
                  {selectedPeriod}
                  <ChevronDown className="w-3 h-3 ml-1" />
                </Button>
              </div>
              <CardDescription className="text-gray-400 text-xs font-light">
                Users with active session in the time frame
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-0">
              <div className="text-2xl text-white mb-2 font-light">1,250</div>
              <div className="flex items-center text-green-400 text-xs font-light">
                <TrendingUp className="w-3 h-3 mr-1" />
                24% from yesterday
              </div>
            </CardContent>
          </Card>

          {/* New Users Card */}
          <Card className="border-white/10 bg-black/50 rounded-none">
            <CardHeader className="pb-4">
              <div className="flex items-center justify-between">
                <CardTitle className="text-white text-base font-normal">New Users</CardTitle>
                <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white p-0 h-auto font-light">
                  {selectedPeriod}
                  <ChevronDown className="w-3 h-3 ml-1" />
                </Button>
              </div>
              <CardDescription className="text-gray-400 text-xs font-light">
                Newly registered Users in the time frame
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-0">
              <div className="text-2xl text-white mb-2 font-light">10</div>
              <div className="flex items-center text-red-400 text-xs font-light">
                <TrendingDown className="w-3 h-3 mr-1" />
                18% from yesterday
              </div>
            </CardContent>
          </Card>
        </div>
        {/* Right Column - New Users Table */}
        <Card className="border-white/10 col-span-2 bg-black/50 rounded-none">
          <CardHeader className="pb-4">
            <CardTitle className="text-white text-base font-normal">New Users</CardTitle>
          </CardHeader>
          <CardContent className="pt-0">
            <div className="space-y-4">
              {newUsers.map((user, index) => (
                <div key={index} className="flex items-center justify-between py-3 border-b border-white/5 last:border-b-0 hover:bg-white/5 transition-colors duration-200 rounded-none px-2 -mx-2">
                  <div className="flex items-center space-x-3">
                    <div className="text-xs text-gray-400 w-14 font-light">{user.time}</div>
                    <div>
                      <div className="text-sm text-white font-light">{user.name}</div>
                      <div className="text-xs text-gray-400 font-light">{user.method}</div>
                    </div>
                  </div>
                  <div className="text-xs text-gray-400 font-light">{user.device}</div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
