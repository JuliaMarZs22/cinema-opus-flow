export type Json = string | number | boolean | null | { [key: string]: Json } | Json[];

export interface Database {
  public: {
    Tables: {
      profiles: {
        Row: { id: string; name: string; initials: string; role: string; created_at: string };
        Insert: { id: string; name: string; initials: string; role?: string };
        Update: { name?: string; initials?: string; role?: string };
      };
      clients: {
        Row: { id: string; name: string; email: string | null; phone: string | null; city: string | null; state: string | null; source: string | null; since_date: string | null; responsible_id: string | null; created_at: string };
        Insert: Omit<Database["public"]["Tables"]["clients"]["Row"], "id" | "created_at"> & { id?: string };
        Update: Partial<Database["public"]["Tables"]["clients"]["Insert"]>;
      };
      leads: {
        Row: { id: string; name: string; project_type: string | null; source: string | null; responsible_id: string | null; estimated_value: number | null; status: string; client_id: string | null; created_at: string; updated_at: string };
        Insert: Omit<Database["public"]["Tables"]["leads"]["Row"], "id" | "created_at" | "updated_at"> & { id?: string };
        Update: Partial<Database["public"]["Tables"]["leads"]["Insert"]>;
      };
      pipeline_stages: {
        Row: { id: string; name: string; position: number; created_at: string };
        Insert: Omit<Database["public"]["Tables"]["pipeline_stages"]["Row"], "id" | "created_at"> & { id?: string };
        Update: Partial<Database["public"]["Tables"]["pipeline_stages"]["Insert"]>;
      };
      opportunities: {
        Row: { id: string; lead_id: string | null; stage_id: string | null; description: string | null; responsible_id: string | null; estimated_value: number | null; probability: number; forecast_date: string | null; created_at: string; updated_at: string };
        Insert: Omit<Database["public"]["Tables"]["opportunities"]["Row"], "id" | "created_at" | "updated_at"> & { id?: string };
        Update: Partial<Database["public"]["Tables"]["opportunities"]["Insert"]>;
      };
      projects: {
        Row: { id: string; code: string; name: string; client_id: string | null; project_type: string | null; status: string; progress: number; value: number | null; start_date: string | null; delivery_date: string | null; opportunity_id: string | null; created_at: string };
        Insert: Omit<Database["public"]["Tables"]["projects"]["Row"], "id" | "created_at"> & { id?: string };
        Update: Partial<Database["public"]["Tables"]["projects"]["Insert"]>;
      };
      project_checklist_items: {
        Row: { id: string; project_id: string; title: string; responsible_id: string | null; status: string; position: number; created_at: string };
        Insert: Omit<Database["public"]["Tables"]["project_checklist_items"]["Row"], "id" | "created_at"> & { id?: string };
        Update: Partial<Database["public"]["Tables"]["project_checklist_items"]["Insert"]>;
      };
      service_orders: {
        Row: { id: string; code: string; project_id: string | null; service_type: string | null; scheduled_at: string | null; status: string; created_at: string };
        Insert: Omit<Database["public"]["Tables"]["service_orders"]["Row"], "id" | "created_at"> & { id?: string };
        Update: Partial<Database["public"]["Tables"]["service_orders"]["Insert"]>;
      };
      stock_items: {
        Row: { id: string; name: string; model: string | null; category: string | null; quantity: number; location: string | null; status: string; project_id: string | null; serial_number: string | null; warranty_until: string | null; updated_at: string };
        Insert: Omit<Database["public"]["Tables"]["stock_items"]["Row"], "id" | "updated_at"> & { id?: string };
        Update: Partial<Database["public"]["Tables"]["stock_items"]["Insert"]>;
      };
      purchase_requests: {
        Row: { id: string; code: string; project_id: string | null; supplier: string | null; requester_id: string | null; value: number | null; status: string; created_at: string };
        Insert: Omit<Database["public"]["Tables"]["purchase_requests"]["Row"], "id" | "created_at"> & { id?: string };
        Update: Partial<Database["public"]["Tables"]["purchase_requests"]["Insert"]>;
      };
      financial_entries: {
        Row: { id: string; type: string; description: string | null; project_id: string | null; amount: number | null; due_date: string | null; paid_at: string | null; created_at: string };
        Insert: Omit<Database["public"]["Tables"]["financial_entries"]["Row"], "id" | "created_at"> & { id?: string };
        Update: Partial<Database["public"]["Tables"]["financial_entries"]["Insert"]>;
      };
      agenda_events: {
        Row: { id: string; title: string; location: string | null; scheduled_at: string; project_id: string | null; service_order_id: string | null; created_at: string };
        Insert: Omit<Database["public"]["Tables"]["agenda_events"]["Row"], "id" | "created_at"> & { id?: string };
        Update: Partial<Database["public"]["Tables"]["agenda_events"]["Insert"]>;
      };
    };
  };
}
