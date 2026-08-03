export interface Result<T> {
	success: boolean;
	message: string | null;
	data: T | null;
}

export function ok<T>(data: T): Result<T> {
	return { success: true, message: null, data };
}

export function fail<T>(message: string): Result<T> {
	return { success: false, message, data: null };
}
