export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instanciate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "12.2.3 (519615d)"
  }
  public: {
    Tables: {
      alerts: {
        Row: {
          created_at: string | null
          id: string
          is_resolved: boolean | null
          message: string
          patient_id: string | null
          resolved_at: string | null
          resolved_by: string | null
          severity: string
          type: string
        }
        Insert: {
          created_at?: string | null
          id?: string
          is_resolved?: boolean | null
          message: string
          patient_id?: string | null
          resolved_at?: string | null
          resolved_by?: string | null
          severity: string
          type: string
        }
        Update: {
          created_at?: string | null
          id?: string
          is_resolved?: boolean | null
          message?: string
          patient_id?: string | null
          resolved_at?: string | null
          resolved_by?: string | null
          severity?: string
          type?: string
        }
        Relationships: [
          {
            foreignKeyName: "alerts_patient_id_fkey"
            columns: ["patient_id"]
            isOneToOne: false
            referencedRelation: "patients"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "alerts_resolved_by_fkey"
            columns: ["resolved_by"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      audit_logs: {
        Row: {
          action: string
          created_at: string | null
          details: Json | null
          id: string
          ip_address: unknown | null
          resource_id: string | null
          resource_type: string
          user_agent: string | null
          user_id: string | null
        }
        Insert: {
          action: string
          created_at?: string | null
          details?: Json | null
          id?: string
          ip_address?: unknown | null
          resource_id?: string | null
          resource_type: string
          user_agent?: string | null
          user_id?: string | null
        }
        Update: {
          action?: string
          created_at?: string | null
          details?: Json | null
          id?: string
          ip_address?: unknown | null
          resource_id?: string | null
          resource_type?: string
          user_agent?: string | null
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "audit_logs_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      backup_logs: {
        Row: {
          backup_location: string | null
          backup_type: string
          completed_at: string | null
          error_message: string | null
          file_size: number | null
          id: string
          started_at: string | null
          status: string
        }
        Insert: {
          backup_location?: string | null
          backup_type: string
          completed_at?: string | null
          error_message?: string | null
          file_size?: number | null
          id?: string
          started_at?: string | null
          status?: string
        }
        Update: {
          backup_location?: string | null
          backup_type?: string
          completed_at?: string | null
          error_message?: string | null
          file_size?: number | null
          id?: string
          started_at?: string | null
          status?: string
        }
        Relationships: []
      }
      badges: {
        Row: {
          created_at: string | null
          description: string | null
          icon: string | null
          id: string
          name: string
          type: string | null
        }
        Insert: {
          created_at?: string | null
          description?: string | null
          icon?: string | null
          id?: string
          name: string
          type?: string | null
        }
        Update: {
          created_at?: string | null
          description?: string | null
          icon?: string | null
          id?: string
          name?: string
          type?: string | null
        }
        Relationships: []
      }
      bookmarks: {
        Row: {
          created_at: string | null
          id: string
          lesson_id: string
          lesson_title: string
          note: string | null
          timestamp: string
          user_id: string | null
        }
        Insert: {
          created_at?: string | null
          id?: string
          lesson_id: string
          lesson_title: string
          note?: string | null
          timestamp: string
          user_id?: string | null
        }
        Update: {
          created_at?: string | null
          id?: string
          lesson_id?: string
          lesson_title?: string
          note?: string | null
          timestamp?: string
          user_id?: string | null
        }
        Relationships: []
      }
      callback_requests: {
        Row: {
          company: string | null
          created_at: string
          email: string
          id: string
          message: string | null
          name: string
          phone: string | null
          preferred_time: string
          status: string
          updated_at: string
        }
        Insert: {
          company?: string | null
          created_at?: string
          email: string
          id?: string
          message?: string | null
          name: string
          phone?: string | null
          preferred_time: string
          status?: string
          updated_at?: string
        }
        Update: {
          company?: string | null
          created_at?: string
          email?: string
          id?: string
          message?: string | null
          name?: string
          phone?: string | null
          preferred_time?: string
          status?: string
          updated_at?: string
        }
        Relationships: []
      }
      care_notes: {
        Row: {
          caregiver_id: string | null
          created_at: string | null
          id: string
          note: string
          patient_id: string | null
        }
        Insert: {
          caregiver_id?: string | null
          created_at?: string | null
          id?: string
          note: string
          patient_id?: string | null
        }
        Update: {
          caregiver_id?: string | null
          created_at?: string | null
          id?: string
          note?: string
          patient_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "care_notes_caregiver_id_fkey"
            columns: ["caregiver_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "care_notes_patient_id_fkey"
            columns: ["patient_id"]
            isOneToOne: false
            referencedRelation: "patients"
            referencedColumns: ["id"]
          },
        ]
      }
      chat_messages: {
        Row: {
          created_at: string
          id: string
          is_staff: boolean
          message: string
          ticket_id: string | null
          user_id: string | null
        }
        Insert: {
          created_at?: string
          id?: string
          is_staff?: boolean
          message: string
          ticket_id?: string | null
          user_id?: string | null
        }
        Update: {
          created_at?: string
          id?: string
          is_staff?: boolean
          message?: string
          ticket_id?: string | null
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "chat_messages_ticket_id_fkey"
            columns: ["ticket_id"]
            isOneToOne: false
            referencedRelation: "support_tickets"
            referencedColumns: ["id"]
          },
        ]
      }
      comments: {
        Row: {
          content: string
          created_at: string | null
          id: string
          likes: number | null
          module_id: string
          parent_id: string | null
          user_id: string | null
        }
        Insert: {
          content: string
          created_at?: string | null
          id?: string
          likes?: number | null
          module_id: string
          parent_id?: string | null
          user_id?: string | null
        }
        Update: {
          content?: string
          created_at?: string | null
          id?: string
          likes?: number | null
          module_id?: string
          parent_id?: string | null
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "comments_parent_id_fkey"
            columns: ["parent_id"]
            isOneToOne: false
            referencedRelation: "comments"
            referencedColumns: ["id"]
          },
        ]
      }
      contact_submissions: {
        Row: {
          created_at: string
          email: string
          id: string
          message: string
          name: string
          status: string | null
        }
        Insert: {
          created_at?: string
          email: string
          id?: string
          message: string
          name: string
          status?: string | null
        }
        Update: {
          created_at?: string
          email?: string
          id?: string
          message?: string
          name?: string
          status?: string | null
        }
        Relationships: []
      }
      content_calendar: {
        Row: {
          content: string
          created_at: string
          engagement_data: Json | null
          hashtags: string[] | null
          id: string
          image_urls: string[] | null
          platform: string
          published_at: string | null
          scheduled_date: string
          status: string
          title: string
          updated_at: string
        }
        Insert: {
          content: string
          created_at?: string
          engagement_data?: Json | null
          hashtags?: string[] | null
          id?: string
          image_urls?: string[] | null
          platform: string
          published_at?: string | null
          scheduled_date: string
          status?: string
          title: string
          updated_at?: string
        }
        Update: {
          content?: string
          created_at?: string
          engagement_data?: Json | null
          hashtags?: string[] | null
          id?: string
          image_urls?: string[] | null
          platform?: string
          published_at?: string | null
          scheduled_date?: string
          status?: string
          title?: string
          updated_at?: string
        }
        Relationships: []
      }
      course_materials: {
        Row: {
          course_id: string | null
          created_at: string | null
          file_type: string | null
          file_url: string | null
          id: string
          title: string
          uploaded_by: string | null
        }
        Insert: {
          course_id?: string | null
          created_at?: string | null
          file_type?: string | null
          file_url?: string | null
          id?: string
          title: string
          uploaded_by?: string | null
        }
        Update: {
          course_id?: string | null
          created_at?: string | null
          file_type?: string | null
          file_url?: string | null
          id?: string
          title?: string
          uploaded_by?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "course_materials_course_id_fkey"
            columns: ["course_id"]
            isOneToOne: false
            referencedRelation: "courses"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "course_materials_uploaded_by_fkey"
            columns: ["uploaded_by"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      courses: {
        Row: {
          created_at: string | null
          description: string | null
          id: string
          is_free: boolean | null
          price: number | null
          title: string
          tutor_id: string | null
        }
        Insert: {
          created_at?: string | null
          description?: string | null
          id?: string
          is_free?: boolean | null
          price?: number | null
          title: string
          tutor_id?: string | null
        }
        Update: {
          created_at?: string | null
          description?: string | null
          id?: string
          is_free?: boolean | null
          price?: number | null
          title?: string
          tutor_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "courses_tutor_id_fkey"
            columns: ["tutor_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      donations: {
        Row: {
          amount: number
          cause: string | null
          created_at: string
          currency: string | null
          donor_email: string
          donor_name: string
          id: string
          merchant_id: string | null
          message: string | null
          payment_id: string | null
          payment_status: string | null
          status: string
          updated_at: string
          user_id: string | null
        }
        Insert: {
          amount: number
          cause?: string | null
          created_at?: string
          currency?: string | null
          donor_email: string
          donor_name: string
          id?: string
          merchant_id?: string | null
          message?: string | null
          payment_id?: string | null
          payment_status?: string | null
          status?: string
          updated_at?: string
          user_id?: string | null
        }
        Update: {
          amount?: number
          cause?: string | null
          created_at?: string
          currency?: string | null
          donor_email?: string
          donor_name?: string
          id?: string
          merchant_id?: string | null
          message?: string | null
          payment_id?: string | null
          payment_status?: string | null
          status?: string
          updated_at?: string
          user_id?: string | null
        }
        Relationships: []
      }
      email_campaigns: {
        Row: {
          clicked_count: number | null
          content: string
          created_at: string
          id: string
          name: string
          opened_count: number | null
          recipient_count: number | null
          scheduled_at: string | null
          sent_at: string | null
          status: string
          subject: string
          template_id: string | null
          updated_at: string
        }
        Insert: {
          clicked_count?: number | null
          content: string
          created_at?: string
          id?: string
          name: string
          opened_count?: number | null
          recipient_count?: number | null
          scheduled_at?: string | null
          sent_at?: string | null
          status?: string
          subject: string
          template_id?: string | null
          updated_at?: string
        }
        Update: {
          clicked_count?: number | null
          content?: string
          created_at?: string
          id?: string
          name?: string
          opened_count?: number | null
          recipient_count?: number | null
          scheduled_at?: string | null
          sent_at?: string | null
          status?: string
          subject?: string
          template_id?: string | null
          updated_at?: string
        }
        Relationships: []
      }
      enrollments: {
        Row: {
          course_id: string | null
          enrolled_at: string | null
          id: string
          is_paid: boolean | null
          user_id: string | null
        }
        Insert: {
          course_id?: string | null
          enrolled_at?: string | null
          id?: string
          is_paid?: boolean | null
          user_id?: string | null
        }
        Update: {
          course_id?: string | null
          enrolled_at?: string | null
          id?: string
          is_paid?: boolean | null
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "enrollments_course_id_fkey"
            columns: ["course_id"]
            isOneToOne: false
            referencedRelation: "courses"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "enrollments_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      event_rsvps: {
        Row: {
          company: string | null
          created_at: string
          email: string
          event_id: string | null
          id: string
          name: string
          payment_reference: string | null
          payment_status: string | null
          phone: string | null
          special_requests: string | null
          status: string
          updated_at: string
          user_id: string | null
        }
        Insert: {
          company?: string | null
          created_at?: string
          email: string
          event_id?: string | null
          id?: string
          name: string
          payment_reference?: string | null
          payment_status?: string | null
          phone?: string | null
          special_requests?: string | null
          status?: string
          updated_at?: string
          user_id?: string | null
        }
        Update: {
          company?: string | null
          created_at?: string
          email?: string
          event_id?: string | null
          id?: string
          name?: string
          payment_reference?: string | null
          payment_status?: string | null
          phone?: string | null
          special_requests?: string | null
          status?: string
          updated_at?: string
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "event_rsvps_event_id_fkey"
            columns: ["event_id"]
            isOneToOne: false
            referencedRelation: "events"
            referencedColumns: ["id"]
          },
        ]
      }
      events: {
        Row: {
          created_at: string
          description: string | null
          event_date: string
          event_type: string
          id: string
          image_url: string | null
          max_attendees: number | null
          price_cents: number | null
          requires_approval: boolean | null
          status: string
          title: string
          updated_at: string
          venue_address: string | null
          venue_name: string | null
        }
        Insert: {
          created_at?: string
          description?: string | null
          event_date: string
          event_type: string
          id?: string
          image_url?: string | null
          max_attendees?: number | null
          price_cents?: number | null
          requires_approval?: boolean | null
          status?: string
          title: string
          updated_at?: string
          venue_address?: string | null
          venue_name?: string | null
        }
        Update: {
          created_at?: string
          description?: string | null
          event_date?: string
          event_type?: string
          id?: string
          image_url?: string | null
          max_attendees?: number | null
          price_cents?: number | null
          requires_approval?: boolean | null
          status?: string
          title?: string
          updated_at?: string
          venue_address?: string | null
          venue_name?: string | null
        }
        Relationships: []
      }
      gallery_items: {
        Row: {
          category: string
          created_at: string
          description: string | null
          event_date: string | null
          id: string
          image_url: string | null
          is_featured: boolean | null
          location: string | null
          participants_count: number | null
          status: string | null
          tags: string[] | null
          title: string
          updated_at: string
        }
        Insert: {
          category: string
          created_at?: string
          description?: string | null
          event_date?: string | null
          id?: string
          image_url?: string | null
          is_featured?: boolean | null
          location?: string | null
          participants_count?: number | null
          status?: string | null
          tags?: string[] | null
          title: string
          updated_at?: string
        }
        Update: {
          category?: string
          created_at?: string
          description?: string | null
          event_date?: string | null
          id?: string
          image_url?: string | null
          is_featured?: boolean | null
          location?: string | null
          participants_count?: number | null
          status?: string | null
          tags?: string[] | null
          title?: string
          updated_at?: string
        }
        Relationships: []
      }
      invites: {
        Row: {
          accepted: boolean | null
          accepted_at: string | null
          created_at: string | null
          email: string
          expires_at: string | null
          id: string
          invited_by: string
          role: string
          token: string
        }
        Insert: {
          accepted?: boolean | null
          accepted_at?: string | null
          created_at?: string | null
          email: string
          expires_at?: string | null
          id?: string
          invited_by: string
          role: string
          token: string
        }
        Update: {
          accepted?: boolean | null
          accepted_at?: string | null
          created_at?: string | null
          email?: string
          expires_at?: string | null
          id?: string
          invited_by?: string
          role?: string
          token?: string
        }
        Relationships: [
          {
            foreignKeyName: "invites_invited_by_fkey"
            columns: ["invited_by"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      learnership_applications: {
        Row: {
          age: number | null
          availability: string | null
          created_at: string
          education_level: string | null
          email: string
          emergency_contact: string | null
          emergency_phone: string | null
          full_name: string
          id: string
          motivation: string
          phone: string | null
          previous_experience: string | null
          program_interest: string
          status: string
          updated_at: string
          user_id: string | null
        }
        Insert: {
          age?: number | null
          availability?: string | null
          created_at?: string
          education_level?: string | null
          email: string
          emergency_contact?: string | null
          emergency_phone?: string | null
          full_name: string
          id?: string
          motivation: string
          phone?: string | null
          previous_experience?: string | null
          program_interest: string
          status?: string
          updated_at?: string
          user_id?: string | null
        }
        Update: {
          age?: number | null
          availability?: string | null
          created_at?: string
          education_level?: string | null
          email?: string
          emergency_contact?: string | null
          emergency_phone?: string | null
          full_name?: string
          id?: string
          motivation?: string
          phone?: string | null
          previous_experience?: string | null
          program_interest?: string
          status?: string
          updated_at?: string
          user_id?: string | null
        }
        Relationships: []
      }
      learning_goals: {
        Row: {
          created_at: string | null
          current_xp: number | null
          id: string
          updated_at: string | null
          user_id: string | null
          week_start: string | null
          weekly_xp_goal: number | null
        }
        Insert: {
          created_at?: string | null
          current_xp?: number | null
          id?: string
          updated_at?: string | null
          user_id?: string | null
          week_start?: string | null
          weekly_xp_goal?: number | null
        }
        Update: {
          created_at?: string | null
          current_xp?: number | null
          id?: string
          updated_at?: string | null
          user_id?: string | null
          week_start?: string | null
          weekly_xp_goal?: number | null
        }
        Relationships: []
      }
      live_sessions: {
        Row: {
          course_id: string | null
          created_at: string | null
          created_by: string | null
          duration: number | null
          id: string
          recording_url: string | null
          scheduled_time: string
          status: string | null
          title: string
        }
        Insert: {
          course_id?: string | null
          created_at?: string | null
          created_by?: string | null
          duration?: number | null
          id?: string
          recording_url?: string | null
          scheduled_time: string
          status?: string | null
          title: string
        }
        Update: {
          course_id?: string | null
          created_at?: string | null
          created_by?: string | null
          duration?: number | null
          id?: string
          recording_url?: string | null
          scheduled_time?: string
          status?: string | null
          title?: string
        }
        Relationships: [
          {
            foreignKeyName: "live_sessions_course_id_fkey"
            columns: ["course_id"]
            isOneToOne: false
            referencedRelation: "courses"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "live_sessions_created_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      marketplace_items: {
        Row: {
          category: string
          content: Json
          created_at: string | null
          creator_id: string | null
          description: string | null
          downloads: number | null
          id: string
          is_featured: boolean | null
          preview_image: string | null
          price: number | null
          rating: number | null
          rating_count: number | null
          tags: string[] | null
          title: string
          type: string
          updated_at: string | null
        }
        Insert: {
          category: string
          content: Json
          created_at?: string | null
          creator_id?: string | null
          description?: string | null
          downloads?: number | null
          id?: string
          is_featured?: boolean | null
          preview_image?: string | null
          price?: number | null
          rating?: number | null
          rating_count?: number | null
          tags?: string[] | null
          title: string
          type: string
          updated_at?: string | null
        }
        Update: {
          category?: string
          content?: Json
          created_at?: string | null
          creator_id?: string | null
          description?: string | null
          downloads?: number | null
          id?: string
          is_featured?: boolean | null
          preview_image?: string | null
          price?: number | null
          rating?: number | null
          rating_count?: number | null
          tags?: string[] | null
          title?: string
          type?: string
          updated_at?: string | null
        }
        Relationships: []
      }
      medications: {
        Row: {
          created_at: string | null
          dosage: string
          end_date: string | null
          frequency: string
          id: string
          is_active: boolean | null
          name: string
          patient_id: string | null
          start_date: string
        }
        Insert: {
          created_at?: string | null
          dosage: string
          end_date?: string | null
          frequency: string
          id?: string
          is_active?: boolean | null
          name: string
          patient_id?: string | null
          start_date: string
        }
        Update: {
          created_at?: string | null
          dosage?: string
          end_date?: string | null
          frequency?: string
          id?: string
          is_active?: boolean | null
          name?: string
          patient_id?: string | null
          start_date?: string
        }
        Relationships: [
          {
            foreignKeyName: "medications_patient_id_fkey"
            columns: ["patient_id"]
            isOneToOne: false
            referencedRelation: "patients"
            referencedColumns: ["id"]
          },
        ]
      }
      monitoring_logs: {
        Row: {
          component: string
          created_at: string | null
          details: Json | null
          duration_ms: number | null
          event_type: string
          id: string
          message: string
          metadata: Json | null
          resolved: boolean | null
          severity: string
          user_id: string | null
        }
        Insert: {
          component: string
          created_at?: string | null
          details?: Json | null
          duration_ms?: number | null
          event_type: string
          id?: string
          message: string
          metadata?: Json | null
          resolved?: boolean | null
          severity: string
          user_id?: string | null
        }
        Update: {
          component?: string
          created_at?: string | null
          details?: Json | null
          duration_ms?: number | null
          event_type?: string
          id?: string
          message?: string
          metadata?: Json | null
          resolved?: boolean | null
          severity?: string
          user_id?: string | null
        }
        Relationships: []
      }
      newsletter_subscribers: {
        Row: {
          created_at: string
          email: string
          id: string
          name: string | null
          preferences: Json | null
          status: string
          subscription_source: string | null
          updated_at: string
        }
        Insert: {
          created_at?: string
          email: string
          id?: string
          name?: string | null
          preferences?: Json | null
          status?: string
          subscription_source?: string | null
          updated_at?: string
        }
        Update: {
          created_at?: string
          email?: string
          id?: string
          name?: string | null
          preferences?: Json | null
          status?: string
          subscription_source?: string | null
          updated_at?: string
        }
        Relationships: []
      }
      notes: {
        Row: {
          content: string
          created_at: string | null
          id: string
          lesson_id: string
          lesson_title: string
          updated_at: string | null
          user_id: string | null
        }
        Insert: {
          content: string
          created_at?: string | null
          id?: string
          lesson_id: string
          lesson_title: string
          updated_at?: string | null
          user_id?: string | null
        }
        Update: {
          content?: string
          created_at?: string | null
          id?: string
          lesson_id?: string
          lesson_title?: string
          updated_at?: string | null
          user_id?: string | null
        }
        Relationships: []
      }
      notifications: {
        Row: {
          created_at: string | null
          id: string
          message: string
          read: boolean | null
          title: string
          type: string | null
          user_id: string | null
        }
        Insert: {
          created_at?: string | null
          id?: string
          message: string
          read?: boolean | null
          title: string
          type?: string | null
          user_id?: string | null
        }
        Update: {
          created_at?: string | null
          id?: string
          message?: string
          read?: boolean | null
          title?: string
          type?: string | null
          user_id?: string | null
        }
        Relationships: []
      }
      page_views: {
        Row: {
          created_at: string
          id: string
          ip_address: unknown | null
          page_path: string
          referrer: string | null
          session_id: string | null
          user_agent: string | null
          user_id: string | null
        }
        Insert: {
          created_at?: string
          id?: string
          ip_address?: unknown | null
          page_path: string
          referrer?: string | null
          session_id?: string | null
          user_agent?: string | null
          user_id?: string | null
        }
        Update: {
          created_at?: string
          id?: string
          ip_address?: unknown | null
          page_path?: string
          referrer?: string | null
          session_id?: string | null
          user_agent?: string | null
          user_id?: string | null
        }
        Relationships: []
      }
      partnership_requests: {
        Row: {
          additional_info: string | null
          budget_range: string | null
          company_name: string
          company_size: string | null
          contact_person: string
          created_at: string
          email: string
          goals: string
          id: string
          industry: string | null
          partnership_type: string
          phone: string | null
          proposed_contribution: string | null
          status: string
          timeline: string | null
          updated_at: string
          user_id: string | null
        }
        Insert: {
          additional_info?: string | null
          budget_range?: string | null
          company_name: string
          company_size?: string | null
          contact_person: string
          created_at?: string
          email: string
          goals: string
          id?: string
          industry?: string | null
          partnership_type: string
          phone?: string | null
          proposed_contribution?: string | null
          status?: string
          timeline?: string | null
          updated_at?: string
          user_id?: string | null
        }
        Update: {
          additional_info?: string | null
          budget_range?: string | null
          company_name?: string
          company_size?: string | null
          contact_person?: string
          created_at?: string
          email?: string
          goals?: string
          id?: string
          industry?: string | null
          partnership_type?: string
          phone?: string | null
          proposed_contribution?: string | null
          status?: string
          timeline?: string | null
          updated_at?: string
          user_id?: string | null
        }
        Relationships: []
      }
      patients: {
        Row: {
          created_at: string | null
          date_of_birth: string | null
          emergency_contact: string | null
          id: string
          medical_conditions: string[] | null
          user_id: string | null
        }
        Insert: {
          created_at?: string | null
          date_of_birth?: string | null
          emergency_contact?: string | null
          id?: string
          medical_conditions?: string[] | null
          user_id?: string | null
        }
        Update: {
          created_at?: string | null
          date_of_birth?: string | null
          emergency_contact?: string | null
          id?: string
          medical_conditions?: string[] | null
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "patients_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      progress: {
        Row: {
          completed: boolean | null
          completed_at: string | null
          course_id: string
          created_at: string | null
          id: string
          module_id: string
          user_id: string | null
        }
        Insert: {
          completed?: boolean | null
          completed_at?: string | null
          course_id: string
          created_at?: string | null
          id?: string
          module_id: string
          user_id?: string | null
        }
        Update: {
          completed?: boolean | null
          completed_at?: string | null
          course_id?: string
          created_at?: string | null
          id?: string
          module_id?: string
          user_id?: string | null
        }
        Relationships: []
      }
      projects: {
        Row: {
          created_at: string | null
          demo_url: string | null
          description: string | null
          github_url: string | null
          id: string
          is_public: boolean | null
          owner_id: string | null
          status: string | null
          tags: string[] | null
          tech_stack: string[] | null
          title: string
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          demo_url?: string | null
          description?: string | null
          github_url?: string | null
          id?: string
          is_public?: boolean | null
          owner_id?: string | null
          status?: string | null
          tags?: string[] | null
          tech_stack?: string[] | null
          title: string
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          demo_url?: string | null
          description?: string | null
          github_url?: string | null
          id?: string
          is_public?: boolean | null
          owner_id?: string | null
          status?: string | null
          tags?: string[] | null
          tech_stack?: string[] | null
          title?: string
          updated_at?: string | null
        }
        Relationships: []
      }
      resources: {
        Row: {
          created_at: string | null
          id: string
          module_id: string
          title: string
          type: string | null
          url: string
        }
        Insert: {
          created_at?: string | null
          id?: string
          module_id: string
          title: string
          type?: string | null
          url: string
        }
        Update: {
          created_at?: string | null
          id?: string
          module_id?: string
          title?: string
          type?: string | null
          url?: string
        }
        Relationships: []
      }
      subscriptions: {
        Row: {
          created_at: string | null
          expires_at: string | null
          id: string
          status: string | null
          tier: string
          updated_at: string | null
          user_id: string
        }
        Insert: {
          created_at?: string | null
          expires_at?: string | null
          id?: string
          status?: string | null
          tier: string
          updated_at?: string | null
          user_id: string
        }
        Update: {
          created_at?: string | null
          expires_at?: string | null
          id?: string
          status?: string | null
          tier?: string
          updated_at?: string | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "subscriptions_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      support_tickets: {
        Row: {
          assigned_to: string | null
          created_at: string
          email: string
          id: string
          message: string
          name: string
          priority: string
          status: string
          subject: string
          updated_at: string
          user_id: string | null
        }
        Insert: {
          assigned_to?: string | null
          created_at?: string
          email: string
          id?: string
          message: string
          name: string
          priority?: string
          status?: string
          subject: string
          updated_at?: string
          user_id?: string | null
        }
        Update: {
          assigned_to?: string | null
          created_at?: string
          email?: string
          id?: string
          message?: string
          name?: string
          priority?: string
          status?: string
          subject?: string
          updated_at?: string
          user_id?: string | null
        }
        Relationships: []
      }
      templates: {
        Row: {
          category: string
          code: string | null
          content: Json
          created_at: string | null
          creator_id: string | null
          description: string | null
          downloads: number | null
          id: string
          is_public: boolean | null
          rating: number | null
          rating_count: number | null
          schema: Json | null
          tags: string[] | null
          title: string
          type: string | null
          updated_at: string | null
        }
        Insert: {
          category: string
          code?: string | null
          content: Json
          created_at?: string | null
          creator_id?: string | null
          description?: string | null
          downloads?: number | null
          id?: string
          is_public?: boolean | null
          rating?: number | null
          rating_count?: number | null
          schema?: Json | null
          tags?: string[] | null
          title: string
          type?: string | null
          updated_at?: string | null
        }
        Update: {
          category?: string
          code?: string | null
          content?: Json
          created_at?: string | null
          creator_id?: string | null
          description?: string | null
          downloads?: number | null
          id?: string
          is_public?: boolean | null
          rating?: number | null
          rating_count?: number | null
          schema?: Json | null
          tags?: string[] | null
          title?: string
          type?: string | null
          updated_at?: string | null
        }
        Relationships: []
      }
      user_badges: {
        Row: {
          badge_id: string | null
          earned_at: string | null
          id: string
          user_id: string | null
        }
        Insert: {
          badge_id?: string | null
          earned_at?: string | null
          id?: string
          user_id?: string | null
        }
        Update: {
          badge_id?: string | null
          earned_at?: string | null
          id?: string
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "user_badges_badge_id_fkey"
            columns: ["badge_id"]
            isOneToOne: false
            referencedRelation: "badges"
            referencedColumns: ["id"]
          },
        ]
      }
      user_events: {
        Row: {
          created_at: string
          event_data: Json | null
          event_name: string
          id: string
          page_path: string | null
          session_id: string | null
          user_id: string | null
        }
        Insert: {
          created_at?: string
          event_data?: Json | null
          event_name: string
          id?: string
          page_path?: string | null
          session_id?: string | null
          user_id?: string | null
        }
        Update: {
          created_at?: string
          event_data?: Json | null
          event_name?: string
          id?: string
          page_path?: string | null
          session_id?: string | null
          user_id?: string | null
        }
        Relationships: []
      }
      user_links: {
        Row: {
          approved: boolean | null
          created_at: string | null
          id: string
          linked_patient: string | null
          relationship_type: string | null
          user_id: string | null
        }
        Insert: {
          approved?: boolean | null
          created_at?: string | null
          id?: string
          linked_patient?: string | null
          relationship_type?: string | null
          user_id?: string | null
        }
        Update: {
          approved?: boolean | null
          created_at?: string | null
          id?: string
          linked_patient?: string | null
          relationship_type?: string | null
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "user_links_linked_patient_fkey"
            columns: ["linked_patient"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "user_links_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      users: {
        Row: {
          age: number | null
          clinic_name: string | null
          created_at: string | null
          email: string
          full_name: string
          gender: string | null
          hpcsa_number: string | null
          id: string
          id_upload_url: string | null
          invite_code: string | null
          is_verified: boolean | null
          linked_to: string | null
          mobile: string | null
          phone: string | null
          role: Database["public"]["Enums"]["user_role"]
          tier: string | null
          updated_at: string | null
        }
        Insert: {
          age?: number | null
          clinic_name?: string | null
          created_at?: string | null
          email: string
          full_name: string
          gender?: string | null
          hpcsa_number?: string | null
          id?: string
          id_upload_url?: string | null
          invite_code?: string | null
          is_verified?: boolean | null
          linked_to?: string | null
          mobile?: string | null
          phone?: string | null
          role?: Database["public"]["Enums"]["user_role"]
          tier?: string | null
          updated_at?: string | null
        }
        Update: {
          age?: number | null
          clinic_name?: string | null
          created_at?: string | null
          email?: string
          full_name?: string
          gender?: string | null
          hpcsa_number?: string | null
          id?: string
          id_upload_url?: string | null
          invite_code?: string | null
          is_verified?: boolean | null
          linked_to?: string | null
          mobile?: string | null
          phone?: string | null
          role?: Database["public"]["Enums"]["user_role"]
          tier?: string | null
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "users_linked_to_fkey"
            columns: ["linked_to"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      vitals: {
        Row: {
          blood_pressure_diastolic: number | null
          blood_pressure_systolic: number | null
          heart_rate: number | null
          hydration_level: number | null
          id: string
          patient_id: string | null
          recorded_at: string | null
          temperature: number | null
        }
        Insert: {
          blood_pressure_diastolic?: number | null
          blood_pressure_systolic?: number | null
          heart_rate?: number | null
          hydration_level?: number | null
          id?: string
          patient_id?: string | null
          recorded_at?: string | null
          temperature?: number | null
        }
        Update: {
          blood_pressure_diastolic?: number | null
          blood_pressure_systolic?: number | null
          heart_rate?: number | null
          hydration_level?: number | null
          id?: string
          patient_id?: string | null
          recorded_at?: string | null
          temperature?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "vitals_patient_id_fkey"
            columns: ["patient_id"]
            isOneToOne: false
            referencedRelation: "patients"
            referencedColumns: ["id"]
          },
        ]
      }
      webinars: {
        Row: {
          attendee_count: number | null
          created_at: string | null
          id: string
          is_live: boolean | null
          scheduled_date: string
          scheduled_time: string
          title: string
          tutor_id: string | null
          zoom_link: string | null
        }
        Insert: {
          attendee_count?: number | null
          created_at?: string | null
          id?: string
          is_live?: boolean | null
          scheduled_date: string
          scheduled_time: string
          title: string
          tutor_id?: string | null
          zoom_link?: string | null
        }
        Update: {
          attendee_count?: number | null
          created_at?: string | null
          id?: string
          is_live?: boolean | null
          scheduled_date?: string
          scheduled_time?: string
          title?: string
          tutor_id?: string | null
          zoom_link?: string | null
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      cleanup_old_monitoring_logs: {
        Args: Record<PropertyKey, never>
        Returns: undefined
      }
      get_current_user_role: {
        Args: Record<PropertyKey, never>
        Returns: string
      }
      is_admin: {
        Args: Record<PropertyKey, never>
        Returns: boolean
      }
    }
    Enums: {
      user_role: "patient" | "caregiver" | "family" | "admin"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {
      user_role: ["patient", "caregiver", "family", "admin"],
    },
  },
} as const
