import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { APIUrls } from '@/utils/apiUrls'

const fetchDashboardStats = createAsyncThunk(
  'dashboard/fetchDashboardStats',
  async ({ accessToken }) => {
    try {
      const url = APIUrls.fetchDashboardStats()
      const response = await axios.get(url, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      })
      return response.data
    } catch (err) {
      return err.response?.data
    }
  }
)

const fetchDashboardVideos = createAsyncThunk(
  'dashboard/fetchDashboardVideos',
  async ({ accessToken }) => {
    try {
      const url = APIUrls.fetchDashboardVideos()
      const response = await axios.get(url, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      })
      return response.data
    } catch (err) {
      return err.response?.data
    }
  }
)

export { fetchDashboardStats, fetchDashboardVideos }
