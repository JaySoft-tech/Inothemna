import { defineEventHandler, createError } from '#imports';

export default defineEventHandler(async event => {
    const config = useRuntimeConfig();

    try {
        const response = await $fetch(`${config.public.api}/reviews`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${config.public.token}`,
            },
        });

        return { data: response };
    } catch (err: any) {
        throw createError({
            statusCode: err?.statusCode ?? 500,
            statusMessage:
                err?.statusMessage ?? err?.message ?? 'Failed to fetch reviews',
        });
    }
});
