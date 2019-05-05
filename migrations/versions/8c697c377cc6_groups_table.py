"""groups table

Revision ID: 8c697c377cc6
Revises: 299bf618451d
Create Date: 2019-05-05 11:21:15.611868

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '8c697c377cc6'
down_revision = '299bf618451d'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('group', sa.Column('group', sa.String(length=120), nullable=True))
    op.create_index(op.f('ix_group_group'), 'group', ['group'], unique=False)
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_index(op.f('ix_group_group'), table_name='group')
    op.drop_column('group', 'group')
    # ### end Alembic commands ###
