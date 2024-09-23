import {
  asyncThunkCreator,
  buildCreateSlice,
  type PayloadAction,
} from "@reduxjs/toolkit";
import { IFilterLeads, ILead } from "../models";
import { LeadsApi } from "../api/LeadsApi";

interface IState {
  showCard: boolean;
  isLoading: boolean;
  isError: boolean;
  leadList?: ILead[];
  id: number;
  lead: ILead;
  limit: number;
  page: number;
  totalCount: number;
}

const initialState: IState = {
  showCard: false,
  isLoading: false,
  isError: false,
  id: 0,
  lead: { id: 0, name: "name", price: 0, closest_task_at: 0 },
  limit: 3,
  page: 1,
  totalCount: 0,
};

export const buildAppSlice = buildCreateSlice({
  creators: { asyncThunk: asyncThunkCreator },
});

export const leadsSlice = buildAppSlice({
  name: "leads",
  initialState,
  reducers: (creator) => ({
    setShowCard: creator.reducer((state, action: PayloadAction<boolean>) => {
      state.showCard = action.payload;
    }),
    setIsLoading: creator.reducer((state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    }),
    setLeadId: creator.reducer((state, action: PayloadAction<number>) => {
      state.id = action.payload;
    }),
    setLead: creator.reducer((state, action: PayloadAction<ILead>) => {
      state.lead = action.payload;
    }),
    setPage: creator.reducer((state, action: PayloadAction<number>) => {
      state.page = action.payload;
    }),
    setLimit: creator.reducer((state, action: PayloadAction<number>) => {
      state.limit = action.payload;
    }),
    getTotalCount: creator.asyncThunk(
      (request: { params: IFilterLeads }, { rejectWithValue }) =>
        LeadsApi.getList(request.params)
          .then((r) => r.data._embedded.leads)
          .catch((r) => rejectWithValue(r)),
      {
        pending: (state) => {
          state.isLoading = true;
        },
        rejected: (state) => {
          state.isError = true;
        },
        fulfilled: (state, { payload: leadList }) => {
          state.totalCount = leadList.length;
          state.isLoading = false;
        },
      }
    ),
    getLeadsList: creator.asyncThunk(
      (request: { params: IFilterLeads }, { rejectWithValue }) =>
        LeadsApi.getList(request.params)
          .then((r) => r.data._embedded.leads)
          .catch((r) => rejectWithValue(r)),
      {
        pending: (state) => {
          state.isLoading = true;
        },
        rejected: (state) => {
          state.isError = true;
        },
        fulfilled: (state, { payload: leadList }) => {
          state.leadList = leadList;
          state.isLoading = false;
        },
      }
    ),
    getLead: creator.asyncThunk(
      (request: { params: IFilterLeads }, { rejectWithValue }) =>
        LeadsApi.getList(request.params)
          .then((r) => r.data._embedded.leads[0])
          .catch((r) => rejectWithValue(r)),
      {
        pending: (state) => {
          state.isLoading = true;
        },
        rejected: (state) => {
          state.isError = true;
        },
        fulfilled: (state, { payload: lead }) => {
          state.lead = lead;
          state.isLoading = false;
          state.showCard = true;
        },
      }
    ),
  }),
  selectors: {
    showCard: (state) => state.showCard,
    isLoading: (state) => state.isLoading,
    isError: (state) => state.isError,
    leadList: (state) => state.leadList,
    lead: (state) => state.lead,
    page: (state) => state.page,
    limit: (state) => state.limit,
    totalCount: (state) => state.totalCount,
  },
});

export const leadsReducer = leadsSlice.reducer;
export const leadsActions = leadsSlice.actions;
export const leadsSelectors = leadsSlice.selectors;
