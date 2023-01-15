import { useState } from 'react';

export const UserInfo = () => {
    const [edited, setEdited] = useState(false);

    return (
        <form action="">
            <label htmlFor="">
                <p>text</p>
                {edited ? (
                    <>
                        <input type="text" />
                    </>
                ) : (
                    <p>Info User</p>
                )}
            </label>
        </form>
    );
};