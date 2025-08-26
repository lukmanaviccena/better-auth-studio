import { useState } from 'react'
import { 
  TrendingUp, 
  TrendingDown,
  ChevronDown,
  Users,
  Building2,
  Database,
  Play,
  Settings,
  CheckCircle,
  AlertCircle,
  Terminal,
  ChevronUp,
  ChevronDown as ChevronDownIcon
} from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

interface LogEntry {
  id: string
  timestamp: string
  type: 'info' | 'success' | 'error' | 'warning'
  message: string
  payload?: any
}

export default function Dashboard() {
  const [selectedTimeRange, setSelectedTimeRange] = useState('1Y')
  const [selectedPeriod, _ ] = useState('Daily')
  const [activeTab, setActiveTab] = useState('overview')
  const [seedingStatus, setSeedingStatus] = useState<'idle' | 'seeding' | 'success' | 'error'>('idle')
  const [showTerminal, setShowTerminal] = useState(false)
  const [logs, setLogs] = useState<LogEntry[]>([])
  const [seedCount, setSeedCount] = useState({
    users: 10,
    organizations: 5,
    sessions: 20
  })

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

  const addLog = (type: LogEntry['type'], message: string, payload?: any) => {
    const newLog: LogEntry = {
      id: Date.now().toString(),
      timestamp: new Date().toLocaleTimeString(),
      type,
      message,
      payload
    }
    setLogs(prev => [...prev, newLog])
  }

  const handleSeedData = async (type: string) => {
    console.log({type})
    setSeedingStatus('seeding')
    
    const payload = {
      type,
      count: seedCount[type as keyof typeof seedCount] || 10,
      timestamp: new Date().toISOString()
    }
    
    addLog('info', `Starting ${type} seeding...`, payload)
    
    try {
      // Simulate API call with progress updates
      addLog('info', `Sending request to /api/seed/${type}`, payload)
      
      await new Promise(resolve => setTimeout(resolve, 1000))
      addLog('info', `Processing ${payload.count} ${type}...`)
      
      await new Promise(resolve => setTimeout(resolve, 1000))
      addLog('success', `Successfully seeded ${payload.count} ${type}`)
      
      setSeedingStatus('success')
      setTimeout(() => setSeedingStatus('idle'), 3000)
    } catch (error) {
      addLog('error', `Failed to seed ${type}: ${error}`)
      setSeedingStatus('error')
      setTimeout(() => setSeedingStatus('idle'), 3000)
    }
  }

  const getLogIcon = (type: LogEntry['type']) => {
    switch (type) {
      case 'success': return <CheckCircle className="w-3 h-3 text-green-400" />
      case 'error': return <AlertCircle className="w-3 h-3 text-red-400" />
      case 'warning': return <AlertCircle className="w-3 h-3 text-yellow-400" />
      default: return <div className="w-3 h-3 bg-blue-400 rounded-full" />
    }
  }

  const getLogColor = (type: LogEntry['type']) => {
    switch (type) {
      case 'success': return 'text-green-400'
      case 'error': return 'text-red-400'
      case 'warning': return 'text-yellow-400'
      default: return 'text-blue-400'
    }
  }

  const renderOverview = () => (
    <>
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
    </>
  )

  const renderSeedData = () => (
    <>
      {/* Header */}
      <div className="px-6 pt-8">
        <h1 className="text-xl text-white font-normal">Seed Data</h1>
        <p className="text-sm text-gray-400 mt-1 font-light">Generate sample data for testing and development</p>
      </div>

      {/* Configuration Status */}
      <div className="px-6 pt-6">
        <Card className="border-white/10 bg-black/50 rounded-none">
          <CardHeader className="pb-4">
            <CardTitle className="text-white text-base font-normal flex items-center space-x-2">
              <Settings className="w-4 h-4" />
              <span>Configuration Status</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-0">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="flex items-center space-x-2 p-3 bg-white/5 rounded-none">
                <CheckCircle className="w-4 h-4 text-green-400" />
                <div>
                  <div className="text-sm text-white font-light">Email & Password</div>
                  <div className="text-xs text-gray-400 font-light">Enabled</div>
                </div>
              </div>
              <div className="flex items-center space-x-2 p-3 bg-white/5 rounded-none">
                <CheckCircle className="w-4 h-4 text-green-400" />
                <div>
                  <div className="text-sm text-white font-light">GitHub OAuth</div>
                  <div className="text-xs text-gray-400 font-light">Enabled</div>
                </div>
              </div>
              <div className="flex items-center space-x-2 p-3 bg-white/5 rounded-none">
                <AlertCircle className="w-4 h-4 text-yellow-400" />
                <div>
                  <div className="text-sm text-white font-light">Organizations</div>
                  <div className="text-xs text-gray-400 font-light">Not configured</div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Seed Options Row */}
      <div className="px-6 pt-6">
        <Card className="border-white/10 bg-black/50 rounded-none">
          <CardHeader className="pb-4">
            <CardTitle className="text-white text-base font-normal">Seed Options</CardTitle>
            <CardDescription className="text-gray-400 text-xs font-light">
              Select data types and quantities to seed
            </CardDescription>
          </CardHeader>
          <CardContent className="pt-0">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {/* Users */}
              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <Users className="w-4 h-4 text-white" />
                  <span className="text-sm text-white font-light">Users</span>
                </div>
                <input
                  type="number"
                  value={seedCount.users}
                  onChange={(e) => setSeedCount({...seedCount, users: parseInt(e.target.value) || 0})}
                  className="w-full bg-white/10 border border-white/20 text-white text-sm px-3 py-2 rounded-none font-light"
                  placeholder="Count"
                  min="1"
                  max="100"
                />
                <Button
                  onClick={() => handleSeedData('users')}
                  disabled={seedingStatus === 'seeding'}
                  className="w-full bg-white/10 hover:bg-white/20 text-white border border-white/20 font-light text-sm"
                >
                  {seedingStatus === 'seeding' ? 'Seeding...' : `Seed ${seedCount.users} Users`}
                </Button>
              </div>

              {/* Organizations */}
              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <Building2 className="w-4 h-4 text-white" />
                  <span className="text-sm text-white font-light">Organizations</span>
                </div>
                <input
                  type="number"
                  value={seedCount.organizations}
                  onChange={(e) => setSeedCount({...seedCount, organizations: parseInt(e.target.value) || 0})}
                  className="w-full bg-white/10 border border-white/20 text-white text-sm px-3 py-2 rounded-none font-light"
                  placeholder="Count"
                  min="1"
                  max="50"
                />
                <Button
                  onClick={() => handleSeedData('organizations')}
                  disabled={seedingStatus === 'seeding'}
                  className="w-full bg-white/10 hover:bg-white/20 text-white border border-white/20 font-light text-sm"
                >
                  {seedingStatus === 'seeding' ? 'Seeding...' : `Seed ${seedCount.organizations} Organizations`}
                </Button>
              </div>

              {/* Sessions */}
              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <Database className="w-4 h-4 text-white" />
                  <span className="text-sm text-white font-light">Sessions</span>
                </div>
                <input
                  type="number"
                  value={seedCount.sessions}
                  onChange={(e) => setSeedCount({...seedCount, sessions: parseInt(e.target.value) || 0})}
                  className="w-full bg-white/10 border border-white/20 text-white text-sm px-3 py-2 rounded-none font-light"
                  placeholder="Count"
                  min="1"
                  max="100"
                />
                <Button
                  onClick={() => handleSeedData('sessions')}
                  disabled={seedingStatus === 'seeding'}
                  className="w-full bg-white/10 hover:bg-white/20 text-white border border-white/20 font-light text-sm"
                >
                  {seedingStatus === 'seeding' ? 'Seeding...' : `Seed ${seedCount.sessions} Sessions`}
                </Button>
              </div>

              {/* Quick Actions */}
              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <Play className="w-4 h-4 text-white" />
                  <span className="text-sm text-white font-light">Quick Actions</span>
                </div>
                <div className="space-y-2">
                  <Button
                    onClick={() => handleSeedData('verifications')}
                    disabled={seedingStatus === 'seeding'}
                    className="w-full bg-white/10 hover:bg-white/20 text-white border border-white/20 font-light text-xs"
                  >
                    Seed Verifications
                  </Button>
                  <Button
                    onClick={() => handleSeedData('accounts')}
                    disabled={seedingStatus === 'seeding'}
                    className="w-full bg-white/10 hover:bg-white/20 text-white border border-white/20 font-light text-xs"
                  >
                    Seed Accounts
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Terminal Log */}
      <div className="px-6 pt-6 pb-8">
        <Card className="border-white/10 bg-black/50 rounded-none">
          <CardHeader className="pb-4">
            <div className="flex items-center justify-between">
              <CardTitle className="text-white text-base font-normal flex items-center space-x-2">
                <Terminal className="w-4 h-4" />
                <span>Seeding Log</span>
              </CardTitle>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setShowTerminal(!showTerminal)}
                className="text-gray-400 hover:text-white p-0 h-auto font-light"
              >
                {showTerminal ? <ChevronUp className="w-4 h-4" /> : <ChevronDownIcon className="w-4 h-4" />}
              </Button>
            </div>
          </CardHeader>
          {showTerminal && (
            <CardContent className="pt-0">
              <div className="bg-black border border-white/10 rounded-none p-4 font-mono text-sm">
                <div className="text-green-400 mb-2">$ better-auth studio seed</div>
                {logs.length === 0 ? (
                  <div className="text-gray-400">No seeding operations yet...</div>
                ) : (
                  <div className="space-y-1">
                    {logs.map((log) => (
                      <div key={log.id} className="flex items-start space-x-2">
                        <span className="text-gray-500 font-light">[{log.timestamp}]</span>
                        {getLogIcon(log.type)}
                        <span className={`font-light ${getLogColor(log.type)}`}>{log.message}</span>
                        {log.payload && (
                          <div className="text-gray-400 text-xs ml-4">
                            <div>Payload: {JSON.stringify(log.payload, null, 2)}</div>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </CardContent>
          )}
        </Card>
      </div>
    </>
  )

  return (
    <div className="space-y-8 animate-fade-in">
      {/* Tab Navigation */}
      <div className="px-6 pt-8">
        <div className="flex space-x-1 border-b border-white/10">
          <Button
            variant={activeTab === 'overview' ? "default" : "ghost"}
            size="sm"
            className={`text-sm px-4 py-2 font-light ${
              activeTab === 'overview' 
                ? 'bg-white/10 text-white border-b-2 border-white' 
                : 'text-gray-400 hover:text-white hover:bg-white/5'
            }`}
            onClick={() => setActiveTab('overview')}
          >
            Overview
          </Button>
          <Button
            variant={activeTab === 'seed' ? "default" : "ghost"}
            size="sm"
            className={`text-sm px-4 py-2 font-light ${
              activeTab === 'seed' 
                ? 'bg-white/10 text-white border-b-2 border-white' 
                : 'text-gray-400 hover:text-white hover:bg-white/5'
            }`}
            onClick={() => setActiveTab('seed')}
          >
            Seed Data
          </Button>
        </div>
      </div>

      {/* Content */}
      {activeTab === 'overview' ? renderOverview() : renderSeedData()}
    </div>
  )
}
