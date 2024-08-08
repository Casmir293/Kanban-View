/// <reference types="vite/client" />

export default {};

declare global {
   /**
   * @description This interface is used to define the stages data object
   * @interface Stages
   * @path env.d.ts
   * @note it is globally declared
   */
    export interface Stages {
        id: string,
        name: string,
        header_color: string,
        description: string,
        pipeline: string,
        order: string,
        created_at: string,
    }

   /**
   * @description This interface is used to define the contacts data object
   * @interface Contacts
   * @path env.d.ts
   * @note it is globally declared
   */
    export interface Contacts {
        id: string,
        full_name: string,
        first_name: string,
        last_name: string,
        nationality_code: string,
        country_code: string | null,
        phone_number: string,
        status: string,
        lost_reason: string | null,
        lost_reason_comments: string | null,
        held_by: string | null,
        hold_expired_at: string | null,
        stage: string,
        assigned_to: string,
        source: string | null,
        created_at: string,
    }    
}
