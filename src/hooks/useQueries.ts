import { useQuery } from '@tanstack/react-query'
import {
  mockMetrics,
  mockApplications,
  mockFeeTrend,
  mockNotices,
  mockEvents,
  mockModules,
  mockDepartments,
  mockApplicationStatus,
} from '../lib/mock-data'

const delay = (ms: number) => new Promise(res => setTimeout(res, ms))

export function useMetrics() {
  return useQuery({
    queryKey: ['metrics'],
    queryFn: async () => { await delay(300); return mockMetrics },
  })
}

export function useApplications() {
  return useQuery({
    queryKey: ['applications'],
    queryFn: async () => { await delay(400); return mockApplications },
  })
}

export function useFeeTrend() {
  return useQuery({
    queryKey: ['fee-trend'],
    queryFn: async () => { await delay(350); return mockFeeTrend },
  })
}

export function useNotices() {
  return useQuery({
    queryKey: ['notices'],
    queryFn: async () => { await delay(200); return mockNotices },
  })
}

export function useEvents() {
  return useQuery({
    queryKey: ['events'],
    queryFn: async () => { await delay(200); return mockEvents },
  })
}

export function useModules() {
  return useQuery({
    queryKey: ['modules'],
    queryFn: async () => { await delay(300); return mockModules },
  })
}

export function useDepartments() {
  return useQuery({
    queryKey: ['departments'],
    queryFn: async () => { await delay(300); return mockDepartments },
  })
}

export function useApplicationStatus() {
  return useQuery({
    queryKey: ['application-status'],
    queryFn: async () => { await delay(300); return mockApplicationStatus },
  })
}
