"""groups table

Revision ID: 299bf618451d
Revises: 7962b1a9db28
Create Date: 2019-05-05 11:19:48.903451

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '299bf618451d'
down_revision = '7962b1a9db28'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('group',
    sa.Column('groupId', sa.Integer(), nullable=False),
    sa.Column('name', sa.String(length=256), nullable=True),
    sa.Column('location', sa.String(length=120), nullable=True),
    sa.PrimaryKeyConstraint('groupId')
    )
    op.create_index(op.f('ix_group_location'), 'group', ['location'], unique=False)
    op.create_index(op.f('ix_group_name'), 'group', ['name'], unique=False)
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_index(op.f('ix_group_name'), table_name='group')
    op.drop_index(op.f('ix_group_location'), table_name='group')
    op.drop_table('group')
    # ### end Alembic commands ###
