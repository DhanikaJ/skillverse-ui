export interface Course {
  id: number;
  title: string;
  instructor: string;
  price: number;
  imageUrl: string;
  description: string;
  pricelevel: string;
  difficulty: string;
  thumbnail: string;
  created_at: string | Date;
  status: Status;
  users: User[]; // For course details page to show enrolled users
}

export interface User {
  id: number;
  fname: string;
  lname: string;
  email: string;
  photo: string;
  created_at: string | Date;
}

export interface Enrollment {
  id: number;
  userId: number;
  userName: string;
  courseId: number;
  courseTitle: string;
  enrolled_at: string | Date;
  progress: number; // 0-100
  statusType: string;
}

export interface Payment {
  id: number;
  userId: number | null;
  userName: string | null;
  courseId: number | null;
  courseName: string | null;
  amount: number;
  status: string;
  txnReference: string;
  paymentMethod: string | null;
  paidAt: number | null; // milliseconds (Java .getTime())
  createdAt: number | null; // milliseconds
}

export interface OrderItem {
  id: number;
  courseId: number | null;
  courseName: string | null;
  courseDescription: string | null;
  coursePrice: number | null;
  itemPrice: number;
}

export interface Order {
  id: number;
  userId: number | null;
  userName: string | null;
  total: number;
  status: string;
  createdAt: number | null; // milliseconds
  orderItems: OrderItem[];
}

export interface Status {
  id: number;
  type: string;
}

export interface Review {
  id: number;
  userId: number;
  courseId: number;
  courseTitle: string;
  rating: number; // 1-5
  comment: string;
  reviewedAt: string | Date;
}

export interface QuizAttempt {
  id: number;
  quizId: number;
  quizTitle: string;
  userId: number;
  score: number | null;
  attemptedAt: string | Date;
}

export interface JwtTokenResponse {
  token: string;
  type: string; // "Bearer "
  email: string;
  role: string;
}

export interface CourseStatsResponse {
  totalCourses: number;
  totalEnrollments: number;
}

export interface ErrorResponse {
  error: string;
  status: number;
  message: string;
  timestamp: string; // ISO 8601 datetime
  path?: string;
}

export interface AuthRequest {
  email: string;
  password: string;
}

export interface UserRequest {
  fname: string;
  lname: string;
  email: string;
}

export interface CourseRequest {
  title: string;
  description: string;
  pricelevel: string;
  difficulty: string;
  price: number;
  thumbnail: string;
}

export interface LessonRequest {
  courseId: number;
  title: string;
  video_url: string;
  order_index: number;
  resource_file: string;
}

export interface Certificate {
  id: number;
  userId: number;
  courseId: number;
  courseTitle: string;
  issueDate: string | Date;
  certficatePath: string;
}

export interface Category {
  id: number;
  type: string;
}

export interface Cart {
  id: number;
  userId: number;
  sessionId: string;
  courseId: number;
  courseTitle: string;
  addedAt: string | Date;
}

export interface EnrollmentResponse {
  id: number;
  progress: number;
  enrolled_at: string | Date;
  statusType: string;
  course: Pick<
    Course,
    "id" | "title" | "description" | "thumbnail" | "price" | "difficulty" | "pricelevel"
  >;
}

/** * Spring Data Page Wrapper - Paginated API responses * All list endpoints return this structure * Example: GET /api/v1/courses returns Page<CourseDTO> */
export interface PaginatedResponse<T> {
  content: T[];
  pageable: {
    sort: {
      sorted: boolean;
      unsorted: boolean;
      empty: boolean;
    };
    offset: number;
    pageNumber: number;
    pageSize: number;
    unpaged: boolean;
    paged: boolean;
  };
  totalPages: number;
  totalElements: number;
  size: number;
  number: number;
  first: boolean;
  last: boolean;
  numberOfElements: number;
  empty: boolean;
  sort: {
    sorted: boolean;
    unsorted: boolean;
    empty: boolean;
  };
}

// ============================================================================
// Convenience Type Aliases
// ============================================================================

export type CoursesPage = PaginatedResponse<Course>;
export type UsersPage = PaginatedResponse<User>;
export type EnrollmentsPage = PaginatedResponse<Enrollment>;
export type PaymentsPage = PaginatedResponse<Payment>;
export type OrdersPage = PaginatedResponse<Order>;

// ============================================================================
// API Response Wrapper (if backend uses wrapper)
// ============================================================================

/** * Generic API response wrapper * Some endpoints might wrap responses like: { success: true, data: [...] } * Adjust based on actual backend response structure */
export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  message?: string;
  error?: string;
}