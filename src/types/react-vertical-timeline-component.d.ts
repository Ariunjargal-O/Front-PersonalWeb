declare module "react-vertical-timeline-component" {
    import * as React from "react";
  
    export interface VerticalTimelineProps {
      lineColor?: string;
      className?: string;
      children?: React.ReactNode; // ✅ This is the fix
    }
  
    export interface VerticalTimelineElementProps {
      className?: string;
      contentStyle?: React.CSSProperties;
      contentArrowStyle?: React.CSSProperties;
      date?: string | React.ReactNode;
      iconStyle?: React.CSSProperties;
      icon?: React.ReactNode;
      children?: React.ReactNode; // Optional: also add here
    }
  
    export const VerticalTimeline: React.FC<VerticalTimelineProps>;
    export const VerticalTimelineElement: React.FC<VerticalTimelineElementProps>;
  }
  